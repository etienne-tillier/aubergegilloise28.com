import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Blog - AubergeGilloise28',
  description: 'Articles, guides et bons plans pour découvrir l\'Eure-et-Loir. Conseils d\'experts et découvertes locales.',
};

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-header-title">Blog & Articles</h1>
          <p className="page-header-subtitle">
            Guides pratiques, bonnes adresses et découvertes written by our 
            local experts to help you plan your stay in the 28.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Articles Récents</h2>
          <p className="section-subtitle">
            Nos derniers articles pour vous inspirer et vous informer.
          </p>

          <div className="grid grid-3">
            <article className="blog-card">
              <Image
                src="/images/aubergegilloise28-com-home-destinations-chateau-anet.jpeg"
                alt="Château d'Anet"
                width={400}
                height={200}
                className="blog-card-image"
              />
              <div className="blog-card-content">
                <span className="blog-card-category">Patrimoine</span>
                <h3 className="blog-card-title">
                  <Link href="/blog/chateau-anet">Le Château d&apos;Anet : Joyau méconnu de la Renaissance</Link>
                </h3>
                <p className="blog-card-excerpt">
                  Redécouverte de ce château attachant à l&apos;histoire fascinante, 
                  ancien séjour de Diane de Poitiers.
                </p>
              </div>
            </article>

            <article className="blog-card">
              <Image
                src="/images/aubergegilloise28-com-restaurants-hero-bistrot-chartres.jpeg"
                alt="Restaaurants de Chartres"
                width={400}
                height={200}
                className="blog-card-image"
              />
              <div className="blog-card-content">
                <span className="blog-card-category">Gastronomie</span>
                <h3 className="blog-card-title">
                  <Link href="/blog/bons-adresses-chartres">5 Restaurants Incontournables à Chartres</Link>
                </h3>
                <p className="blog-card-excerpt">
                  Notre sélection de bonnes tables où manger local, 
                  des@bistros abordables aux gastronomies renommées.
                </p>
              </div>
            </article>

            <article className="blog-card">
              <Image
                src="/images/aubergegilloise28-com-home-activites-foret-rambouillet.jpeg"
                alt="Forêt de Rambouillet"
                width={400}
                height={200}
                className="blog-card-image"
              />
              <div className="blog-card-content">
                <span className="blog-card-category">Nature</span>
                <h3 className="blog-card-title">
                  <Link href="/blog/randonnees-rambouillet">Top 10 des Randonnées autour de Rambouillet</Link>
                </h3>
                <p className="blog-card-excerpt">
                  Les meilleurs sentiers pour profiter de la forêt, 
                  entre clones, étangs et sous-bois parfumés.
                </p>
              </div>
            </article>

            <article className="blog-card">
              <Image
                src="/images/aubergegilloise28-com-hebergements-hero-manoir-perche.jpeg"
                alt="Manoir du Perche"
                width={400}
                height={200}
                className="blog-card-image"
              />
              <div className="blog-card-content">
                <span className="blog-card-category">Hébergement</span>
                <h3 className="blog-card-title">
                  <Link href="/blog/chambres-hotes-perche">5 Chambres d&apos;Hôtes Remarquables dans le Perche</Link>
                </h3>
                <p className="blog-card-excerpt">
                  Notre sélection de hébergements de caractère pour 
                  un séjour authentic au cœur du Perche.
                </p>
              </div>
            </article>

            <article className="blog-card">
              <Image
                src="/images/aubergegilloise28-com-home-gastronomie-terroir-assiette.jpeg"
                alt="Spécialités locales"
                width={400}
                height={200}
                className="blog-card-image"
              />
              <div className="blog-card-content">
                <span className="blog-card-category">Gastronomie</span>
                <h3 className="blog-card-title">
                  <Link href="/blog/produits-locaux">Les Produits Locaux à ne Pas Manquer</Link>
                </h3>
                <p className="blog-card-excerpt">
                  Fromages, miel, volailles, pommes : notre guide des produits 
                  d&apos;exception à ramener de votre séjour.
                </p>
              </div>
            </article>

            <article className="blog-card">
              <Image
                src="/images/aubergegilloise28-com-guides-hero-campagne-eure-loir.jpeg"
                alt="Campagne d'Eure-et-Loir"
                width={400}
                height={200}
                className="blog-card-image"
              />
              <div className="blog-card-content">
                <span className="blog-card-category">Conseils</span>
                <h3 className="blog-card-title">
                  <Link href="/blog/preparer-sejour">Préparer son Séjour dans l&apos;Eure-et-Loir</Link>
                </h3>
                <p className="blog-card-excerpt">
                  Quand partir, comment s&apos;y rendre, où loger : tous nos conseils 
                  pratiques pour un séjour réussi.
                </p>
              </div>
            </article>
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
