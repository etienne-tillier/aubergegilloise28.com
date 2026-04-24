import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Blog - AubergeGilloise28',
  description: 'Articles, guides et bons plans pour découvrir l\'Eure-et-Loir. Conseils d\'experts et découvertes locales.',
};

// Le blog est alimenté dynamiquement depuis Supabase
// Les articles sont récupérés via l'API /api/articles

export default function BlogPage() {
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

      {/* Blog Content - Les articles viennent de Supabase */}
      <section className="section section-white">
        <div className="container">
          <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>
              Aucun article pour le moment.
            </p>
          </div>
        </div>
      </section>

    </>
  );
}
