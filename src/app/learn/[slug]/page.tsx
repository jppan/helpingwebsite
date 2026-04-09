import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleTemplate } from "@/components/tech/article-template";
import { ArticleCard } from "@/components/tech/article-card";
import {
  getLearningStageById,
  getRelatedTechArticles,
  getTechArticleBySlug,
  getTechArticles,
} from "@/lib/content/learning";

export const dynamicParams = false;

export function generateStaticParams() {
  return getTechArticles().map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getTechArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Article not found | Rico Survival Manual",
    };
  }

  return {
    title: `${article.title} | Rico Survival Manual`,
    description: article.summary,
  };
}

export default function LearnArticlePage({ params }: { params: { slug: string } }) {
  const article = getTechArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const stage = getLearningStageById(article.stageId);
  const relatedArticles = getRelatedTechArticles(article.slug);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mb-8">
        <Link href="/learn" className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Pathway / {stage?.title ?? "Article"}
        </Link>
      </div>

      <ArticleTemplate
        article={article}
        stageTitle={stage?.title ?? article.stageId}
        relatedArticleCards={relatedArticles.map((relatedArticle) => (
          <ArticleCard key={relatedArticle.slug} article={relatedArticle} compact />
        ))}
      />
    </div>
  );
}
