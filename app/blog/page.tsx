import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/blog";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Blog - AubergeGilloise28",
  description: "Articles, guides et bons plans pour découvrir l'Eure-et-Loir. Conseils d'experts et découvertes locales.",
};

export default async function BlogPage() {
  const posts = await getPublishedBlogPosts(24, 0);

  return (
    <>
      {/* Hero Section */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-header-title">Blog & Articles</h1>
          <p className="page-header-subtitle">
            Guides pratiques, bonnes adresses et découvertes pour vous aider 
            à planifier votre séjour dans l&Eure-et-Loir.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section section-white">
        <div className="container">
          {posts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>
                Aucun article pour le moment.
              </p>
            </div>
          ) : (
            <div className="blog-grid">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="blog-card">
                  <div className="blog-card-image">
                    {post.cover?.file_url ? (
                      <img 
                        src={post.cover.file_url} 
                        alt={post.cover.alt || post.h1 || post.slug}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      <div style={{ 
                        width: '100%', 
                        height: '100%', 
                        background: 'var(--color-primary-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <span style={{ fontSize: '3rem' }}>📖</span>
                      </div>
                    )}
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      {post.categories && post.categories.length > 0 && (
                        <span className="blog-card-category">
                          {post.categories[0].label}
                        </span>
                      )}
                      {post.published_at && (
                        <span className="blog-card-date">
                          {new Date(post.published_at).toLocaleDateString('fr-FR')}
                        </span>
                      )}
                    </div>
                    <h2 className="blog-card-title">{post.h1 || post.seo_title || post.slug}</h2>
                    {post.excerpt && (
                      <p className="blog-card-excerpt">{post.excerpt}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
