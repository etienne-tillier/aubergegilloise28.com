import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";

import { MarkdownLink } from "@/components/MarkdownLink";
import { getBlogPostBySlug } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const buildAlternatesByLocale = (post: { slug: string; default_locale?: string | null; translations?: unknown }) => {
  const siteOriginRaw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const siteOrigin = siteOriginRaw
    ? siteOriginRaw.replace(/\/+$/, "")
    : `https://${(process.env.SITE_DOMAIN || "").replace(/^https?:\/\//, "").replace(/\/+$/, "")}`;

  const buildArticleUrl = (articleSlug: string) =>
    siteOrigin ? `${siteOrigin}/blog/${articleSlug}` : `/blog/${articleSlug}`;

  const languages: Record<string, string> = {};
  const defaultLocale = post.default_locale || "fr-FR";
  languages[defaultLocale] = buildArticleUrl(post.slug);

  if (post.translations && typeof post.translations === "object") {
    for (const [locale, value] of Object.entries(post.translations as Record<string, unknown>)) {
      if (!value || typeof value !== "object") continue;
      const translation = value as Record<string, unknown>;
      const translatedSlug = typeof translation.slug === "string" ? translation.slug : "";
      const status = typeof translation.status === "string" ? translation.status : "published";

      if (!translatedSlug || status !== "published") continue;
      languages[locale] = buildArticleUrl(translatedSlug);
    }
  }

  return languages;
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    alternates: { languages: buildAlternatesByLocale(post) },
    title: post.seo_title || post.h1 || post.slug,
    description: post.meta_description || post.excerpt || "",
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="page-header">
        <div className="container">
          <Link href="/blog" className="back-link">
            ← Retour au blog
          </Link>
        </div>
      </section>

      {/* Article Content */}
      <section className="section section-white">
        <div className="container" style={{ maxWidth: '800px' }}>
          {/* Cover Image */}
          {post.cover?.file_url && (
            <div className="article-cover">
              <Image
                src={post.cover.file_url}
                alt={post.cover.alt || post.h1 || post.slug}
                width={800}
                height={400}
                style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }}
              />
            </div>
          )}

          {/* Article Header */}
          <header className="article-header">
            {post.categories && post.categories.length > 0 && (
              <div className="article-categories">
                {post.categories.map((cat, index) => (
                  <span key={index} className="blog-card-category">{cat.label}</span>
                ))}
              </div>
            )}
            <h1 className="article-title">{post.h1 || post.seo_title || post.slug}</h1>
            {post.excerpt && (
              <p className="article-excerpt">{post.excerpt}</p>
            )}
            <div className="article-meta">
              {post.author?.name && (
                <span className="article-author">Par {post.author.name}</span>
              )}
              {post.published_at && (
                <span className="article-date">
                  {new Date(post.published_at).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              )}
            </div>
          </header>

          {/* Article Body */}
          <div className="article-body prose prose-custom">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ a: MarkdownLink }}>
              {post.body_md || post.excerpt || ""}
            </ReactMarkdown>
          </div>

          {/* Article Footer */}
          <footer className="article-footer">
            <Link href="/blog" className="btn btn-secondary">
              ← Retour au blog
            </Link>
          </footer>
        </div>
      </section>
    </>
  );
}
