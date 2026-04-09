export type LearningDifficulty = "Foundational" | "Intermediate" | "Advanced";

export type ResourceKind = "Documentation" | "Course" | "Reference" | "Practice";

export type LearningResource = {
  title: string;
  href: string;
  source: string;
  kind: ResourceKind;
  description: string;
};

export type ArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type TechArticle = {
  title: string;
  slug: string;
  category: string;
  stageId: string;
  summary: string;
  difficulty: LearningDifficulty;
  readingTimeMinutes: number;
  overview: string[];
  sections: ArticleSection[];
  practice: string[];
  resourceLinks: LearningResource[];
  relatedArticleSlugs: string[];
};

export type LearningStage = {
  id: string;
  title: string;
  strapline: string;
  order: number;
  duration: string;
  summary: string;
  outcomes: string[];
  articleSlugs: string[];
  resourceLinks: LearningResource[];
};
