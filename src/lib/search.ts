import type { SearchItem } from "@/types/content";

const stopWords = new Set([
  "a",
  "an",
  "and",
  "are",
  "at",
  "be",
  "but",
  "by",
  "for",
  "from",
  "how",
  "i",
  "if",
  "in",
  "is",
  "it",
  "my",
  "of",
  "on",
  "or",
  "the",
  "to",
  "with",
]);

const synonymGroups = [
  ["wifi", "wi", "fi", "wi fi", "internet", "network", "router", "modem", "signal", "online", "offline", "connected", "connection", "web"],
  ["password", "passcode", "login", "signin", "sign", "account", "credential", "credentials", "locked", "lockout", "recovery", "recover", "verify"],
  ["printer", "print", "printing", "queue", "paper", "offline"],
  ["file", "files", "document", "documents", "download", "downloads", "folder", "attachment", "attachments", "pdf"],
  ["storage", "space", "memory", "full", "capacity", "photos", "photo"],
  ["browser", "tab", "tabs", "chrome", "firefox", "edge", "safari", "window", "windows"],
  ["email", "mail", "gmail", "inbox", "message", "messages", "attachment", "send"],
  ["phone", "mobile", "iphone", "android", "cell"],
  ["laptop", "computer", "pc", "mac", "macbook", "desktop"],
  ["slow", "sluggish", "lag", "laggy", "frozen", "freeze", "freezing", "stuck", "unresponsive"],
  ["scam", "phishing", "suspicious", "virus", "infected", "malware", "popup", "pop", "warning", "hacked", "hack"],
];

const phraseReplacements: Record<string, string> = {
  "can't": "cannot",
  wont: "will not",
  "won't": "will not",
  "sign in": "signin",
  "log in": "login",
  "wi-fi": "wifi",
  "pop-up": "popup",
  "pop up": "popup",
};

function normalizeText(value: string) {
  let normalized = value.toLowerCase();

  for (const [source, replacement] of Object.entries(phraseReplacements)) {
    normalized = normalized.replaceAll(source, replacement);
  }

  return normalized
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function stemToken(token: string) {
  if (token.length <= 4) {
    return token;
  }

  if (token.endsWith("ies") && token.length > 5) {
    return `${token.slice(0, -3)}y`;
  }

  if (token.endsWith("ing") && token.length > 6) {
    return token.slice(0, -3);
  }

  if (token.endsWith("ed") && token.length > 5) {
    return token.slice(0, -2);
  }

  if (token.endsWith("es") && token.length > 5) {
    return token.slice(0, -2);
  }

  if (token.endsWith("s") && token.length > 4) {
    return token.slice(0, -1);
  }

  return token;
}

function tokenize(value: string) {
  const normalized = normalizeText(value);

  if (!normalized) {
    return [];
  }

  const rawTokens = normalized.split(" ").filter(Boolean);
  const expandedTokens = rawTokens.flatMap((token) => {
    const stemmed = stemToken(token);
    return stemmed === token ? [token] : [token, stemmed];
  });

  return [...new Set(expandedTokens.filter((token) => token && !stopWords.has(token)))];
}

function expandTokens(tokens: string[]) {
  const expanded = new Set(tokens);

  for (const token of tokens) {
    for (const group of synonymGroups) {
      if (group.includes(token)) {
        for (const synonym of group) {
          for (const synonymToken of tokenize(synonym)) {
            expanded.add(synonymToken);
          }
        }
      }
    }
  }

  return [...expanded].filter(Boolean);
}

function editDistance(left: string, right: string) {
  if (left === right) {
    return 0;
  }

  if (!left.length) {
    return right.length;
  }

  if (!right.length) {
    return left.length;
  }

  const distances = Array.from({ length: right.length + 1 }, (_, index) => index);

  for (let i = 1; i <= left.length; i += 1) {
    let previous = i - 1;
    distances[0] = i;

    for (let j = 1; j <= right.length; j += 1) {
      const current = distances[j];
      const cost = left[i - 1] === right[j - 1] ? 0 : 1;

      distances[j] = Math.min(distances[j] + 1, distances[j - 1] + 1, previous + cost);
      previous = current;
    }
  }

  return distances[right.length];
}

function tokenSimilarity(queryToken: string, candidateToken: string) {
  if (queryToken === candidateToken) {
    return 1;
  }

  if (candidateToken.startsWith(queryToken) || queryToken.startsWith(candidateToken)) {
    return Math.min(queryToken.length, candidateToken.length) >= 4 ? 0.92 : 0;
  }

  if (candidateToken.includes(queryToken) || queryToken.includes(candidateToken)) {
    return Math.min(queryToken.length, candidateToken.length) >= 5 ? 0.82 : 0;
  }

  const distance = editDistance(queryToken, candidateToken);

  if (distance <= 1 && Math.max(queryToken.length, candidateToken.length) >= 5) {
    return 0.76;
  }

  if (distance <= 2 && Math.max(queryToken.length, candidateToken.length) >= 8) {
    return 0.64;
  }

  return 0;
}

function buildFieldIndex(values: string[]) {
  const text = normalizeText(values.join(" "));
  const tokens = expandTokens(tokenize(values.join(" ")));

  return {
    text,
    tokens,
  };
}

function bestTokenScore(queryToken: string, candidateTokens: string[]) {
  let best = 0;

  for (const candidateToken of candidateTokens) {
    const similarity = tokenSimilarity(queryToken, candidateToken);

    if (similarity > best) {
      best = similarity;
    }

    if (best === 1) {
      return best;
    }
  }

  return best;
}

function scoreField(
  queryText: string,
  queryTokens: string[],
  expandedQueryTokens: string[],
  fieldValues: string[],
  phraseWeight: number,
  tokenWeight: number
) {
  const field = buildFieldIndex(fieldValues);
  let score = 0;

  if (queryText && field.text.includes(queryText)) {
    score += phraseWeight;
  }

  for (const queryToken of queryTokens) {
    score += bestTokenScore(queryToken, field.tokens) * tokenWeight;
  }

  for (const queryToken of expandedQueryTokens) {
    if (!queryTokens.includes(queryToken)) {
      score += bestTokenScore(queryToken, field.tokens) * tokenWeight * 0.35;
    }
  }

  return {
    score,
    tokens: field.tokens,
  };
}

function scoreItem(item: SearchItem, query: string) {
  const queryText = normalizeText(query);
  const queryTokens = tokenize(query);
  const expandedQueryTokens = expandTokens(queryTokens);

  if (!queryText || !queryTokens.length) {
    return 0;
  }

  const title = scoreField(queryText, queryTokens, expandedQueryTokens, [item.title], 34, 8);
  const summary = scoreField(queryText, queryTokens, expandedQueryTokens, [item.summary], 16, 4);
  const category = scoreField(queryText, queryTokens, expandedQueryTokens, [item.category], 10, 3);
  const aliases = scoreField(queryText, queryTokens, expandedQueryTokens, item.aliases, 22, 6);
  const context = scoreField(queryText, queryTokens, expandedQueryTokens, item.searchContext, 14, 3.5);

  const allTokens = [...new Set([...title.tokens, ...summary.tokens, ...category.tokens, ...aliases.tokens, ...context.tokens])];
  const matchedTokenCount = queryTokens.filter((queryToken) => bestTokenScore(queryToken, allTokens) >= 0.76).length;

  let score = title.score + summary.score + category.score + aliases.score + context.score;

  if (matchedTokenCount === queryTokens.length) {
    score += 18;
  } else if (matchedTokenCount >= Math.ceil(queryTokens.length / 2)) {
    score += 7;
  }

  score += item.priority * 2;

  return score;
}

export function rankSearchItems(items: SearchItem[], query: string) {
  const normalizedQuery = normalizeText(query);
  const queryTokens = tokenize(query);

  if (!normalizedQuery || !queryTokens.length) {
    return [];
  }

  const minimumScore = queryTokens.length === 1 ? 8 : 10;

  return items
    .map((item) => ({
      item,
      score: scoreItem(item, query),
    }))
    .filter((entry) => entry.score >= minimumScore)
    .sort((left, right) => right.score - left.score || right.item.priority - left.item.priority)
    .map((entry) => entry.item);
}
