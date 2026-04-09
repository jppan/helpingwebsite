import { techArticles } from "@/content/learning/articles";
import { learningStages } from "@/content/learning/pathway";

export function getLearningStages() {
  return [...learningStages].sort((left, right) => left.order - right.order);
}

export function getLearningStageById(id: string) {
  return learningStages.find((stage) => stage.id === id);
}

export function getTechArticles() {
  return [...techArticles];
}

export function getTechArticleBySlug(slug: string) {
  return techArticles.find((article) => article.slug === slug);
}

export function getTechArticlesByStage(stageId: string) {
  return techArticles.filter((article) => article.stageId === stageId);
}

export function getRelatedTechArticles(slug: string) {
  const article = getTechArticleBySlug(slug);

  if (!article) {
    return [];
  }

  return article.relatedArticleSlugs
    .map((relatedSlug) => getTechArticleBySlug(relatedSlug))
    .filter(Boolean) as NonNullable<ReturnType<typeof getTechArticleBySlug>>[];
}
