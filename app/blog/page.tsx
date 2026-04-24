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
              Nos articles sont en cours de chargement...
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section section-alt">
        <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h2 style={{ marginBottom: '1rem' }}>Restez Informé</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--color-text-secondary)' }}>
            Recevez nos derniers guides, bonnes adresses et bons plans directement dans votre boîte mail.
          </p>
          <form style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input
              type="email"
              placeholder="Votre adresse email"
              required
              style={{
                flex: '1 1 250px',
                padding: '0.75rem 1rem',
                border: '2px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                fontSize: '1rem',
                fontFamily: 'var(--font-body)',
              }}
            />
            <button type="submit" className="btn btn-primary">
              S&apos;inscrire
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
