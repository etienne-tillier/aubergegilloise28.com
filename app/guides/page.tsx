import Image from 'next/image';
import Link from 'next/link';

export default function GuidesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-header-title">Nos Guides</h1>
          <p className="page-header-subtitle">
            Guides pratiques, itinéraires détaillés et bons plans pour préparer 
            votre séjour dans l&apos;Eure-et-Loir comme un本地.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section section-white">
        <div className="container">
          {/* Hero Image for Guides */}
          <div style={{ position: 'relative', width: '100%', height: '400px', marginBottom: '3rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <Image
              src="/images/aubergegilloise28-com-guides-hero-campagne-eure-loir.jpeg"
              alt="Campagne de l'Eure-et-Loir - Guide touristique"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(44,36,22,0.6), transparent)' }} />
          </div>

          <h2 className="section-title">Guides par Thématique</h2>
          <p className="section-subtitle">
            Des guides spécialisés pour répondre à toutes vos questions 
            et optimiser votre découverte du 28.
          </p>

          <div className="grid grid-3">
            <article className="card">
              <Image
                src="/images/aubergegilloise28-com-home-destinations-chateau-anet.jpeg"
                alt="Châteaux de la Loire"
                width={400}
                height={250}
                className="card-image"
              />
              <div className="card-content">
                <span className="blog-card-category">Patrimoine</span>
                <h3 className="card-title">Guide des Châteaux</h3>
                <p className="card-description">
                  Château de Maintenon, Anet, Montpipeau... 
                  Tous les atouts du patrimoine nobiliaire du 28.
                </p>
                <Link href="/guides" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  Lire le guide
                </Link>
              </div>
            </article>

            <article className="card">
              <Image
                src="/images/aubergegilloise28-com-home-gastronomie-terroir-assiette.jpeg"
                alt="Gastronomie du terroir"
                width={400}
                height={250}
                className="card-image"
              />
              <div className="card-content">
                <span className="blog-card-category">Gastronomie</span>
                <h3 className="card-title">Spécialités Locales</h3>
                <p className="card-description">
                  Fromages de Beauce, volailles de Bresse, miel de Rambouillet : 
                  découvez les produits d&apos;exception du 28.
                </p>
                <Link href="/guides" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  Lire le guide
                </Link>
              </div>
            </article>

            <article className="card">
              <Image
                src="/images/aubergegilloise28-com-home-activites-foret-rambouillet.jpeg"
                alt="Nature et forêts"
                width={400}
                height={250}
                className="card-image"
              />
              <div className="card-content">
                <span className="blog-card-category">Nature</span>
                <h3 className="card-title">Randonnées & Promenades</h3>
                <p className="card-description">
                  15 sentiers détaillés, de la forêt de Rambouillet aux 
                  rives de l&apos;Eure. Tous les niveaux welcome.
                </p>
                <Link href="/guides" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  Lire le guide
                </Link>
              </div>
            </article>

            <article className="card">
              <Image
                src="/images/aubergegilloise28-com-restaurants-hero-bistrot-chartres.jpeg"
                alt="Chartres"
                width={400}
                height={250}
                className="card-image"
              />
              <div className="card-content">
                <span className="blog-card-category">Ville</span>
                <h3 className="card-title">Chartres en 2 Jours</h3>
                <p className="card-description">
                  Itinéraire complet pour découvrir la ville, 
                  sa cathédrale et ses petites rues médiévales.
                </p>
                <Link href="/guides" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  Lire le guide
                </Link>
              </div>
            </article>

            <article className="card">
              <Image
                src="/images/aubergegilloise28-com-hebergements-hero-manoir-perche.jpeg"
                alt="Hébergements de charme"
                width={400}
                height={250}
                className="card-image"
              />
              <div className="card-content">
                <span className="blog-card-category">Séjour</span>
                <h3 className="card-title">Top 10 Auberges de Charme</h3>
                <p className="card-description">
                  Notre sélection des meilleurs hébergements de caractère 
                  pour un séjour réussi dans le 28.
                </p>
                <Link href="/guides" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  Lire le guide
                </Link>
              </div>
            </article>

            <article className="card">
              <Image
                src="/images/aubergegilloise28-com-guides-hero-campagne-eure-loir.jpeg"
                alt="Le Perche"
                width={400}
                height={250}
                className="card-image"
              />
              <div className="card-content">
                <span className="blog-card-category">Territoire</span>
                <h3 className="card-title">Le Perche à Vélo</h3>
                <p className="card-description">
                  Circuit de 80 km à travers le Perche, 
                  entre bocage, manoirs et prairie verdoyantes.
                </p>
                <Link href="/guides" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  Lire le guide
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Featured Guide */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Guide Essentiel : Que Faire à Chartres</h2>
              <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-secondary)' }}>
                Notre guide complet pour découvrir Chartres et ses environs. 
                Itinéraires détaillés, meilleures adresses, conseils pratiques 
                et erreurs à éviter.
              </p>
              <Link href="/guides" className="btn btn-secondary">
                Télécharger le guide gratuit
              </Link>
            </div>
            <div>
              <Image
                src="/images/aubergegilloise28-com-restaurants-hero-bistrot-chartres.jpeg"
                alt="Cathédrale de Chartres"
                width={600}
                height={400}
                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
