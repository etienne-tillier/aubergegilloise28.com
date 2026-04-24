import Image from 'next/image';
import Link from 'next/link';

export default function RestaurantsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-header-title">Restaurants & Gastronomie</h1>
          <p className="page-header-subtitle">
            De l&apos;auberge traditionnelle au bistrot gastronomique, découvrez où 
            manger local dans l&apos;Eure-et-Loir : produits du terroir, saveurs authentiques.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section section-white">
        <div className="container">
          {/* Hero Image for Restaurants */}
          <div style={{ position: 'relative', width: '100%', height: '400px', marginBottom: '3rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <Image
              src="/images/aubergegilloise28-com-restaurants-hero-bistrot-chartres.jpeg"
              alt="Bistrot traditionnel de Chartres - Cuisine du terroir"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(44,36,22,0.6), transparent)' }} />
          </div>

          <h2 className="section-title">Nos Adresses Gourmandes</h2>
          <p className="section-subtitle">
            Une sélection pointue de restaurants où la cuisine du terroir 
            celebrate les produits locaux de notre belle région.
          </p>

          <div className="grid grid-2">
            <article className="card" style={{ display: 'flex' }}>
              <Image
                src="/images/aubergegilloise28-com-home-gastronomie-terroir-assiette.jpeg"
                alt="Cuisine du terroir - Produits locaux"
                width={300}
                height={220}
                style={{ objectFit: 'cover', width: 300, height: 220 }}
              />
              <div className="card-content">
                <h3 className="card-title">Le Bistrot de l&apos;Eure</h3>
                <p className="card-description">
                  Cuisine traditionnelle française avec produits de la ferme. 
                  Terrasse ombragée au bord de l&apos;Eure.
                </p>
                <Link href="/restaurants" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  En savoir plus
                </Link>
              </div>
            </article>

            <article className="card" style={{ display: 'flex' }}>
              <Image
                src="/images/aubergegilloise28-com-restaurants-hero-bistrot-chartres.jpeg"
                alt="Restaurant au cœur de Chartres"
                width={300}
                height={220}
                style={{ objectFit: 'cover', width: 300, height: 220 }}
              />
              <div className="card-content">
                <h3 className="card-title">La Table de Chartres</h3>
                <p className="card-description">
                  Gastronomie fine avec vue sur la cathédrale. 
                  Menu saisonnier basé sur les produits du marché.
                </p>
                <Link href="/restaurants" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  En savoir plus
                </Link>
              </div>
            </article>

            <article className="card" style={{ display: 'flex' }}>
              <Image
                src="/images/aubergegilloise28-com-home-hebergements-auberge-pierre.jpeg"
                alt="Auberge traditionnelle"
                width={300}
                height={220}
                style={{ objectFit: 'cover', width: 300, height: 220 }}
              />
              <div className="card-content">
                <h3 className="card-title">Auberge du Pont Neuf</h3>
                <p className="card-description">
                  Ancienne auberge de bord de route, spécialisée dans 
                  les viandes grillées et les fromages locaux.
                </p>
                <Link href="/restaurants" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  En savoir plus
                </Link>
              </div>
            </article>

            <article className="card" style={{ display: 'flex' }}>
              <Image
                src="/images/aubergegilloise28-com-guides-hero-campagne-eure-loir.jpeg"
                alt="Brasserie de village"
                width={300}
                height={220}
                style={{ objectFit: 'cover', width: 300, height: 220 }}
              />
              <div className="card-content">
                <h3 className="card-title">Le Café de la Place</h3>
                <p className="card-description">
                  Brasserie de village conviviale. Cuisine maison, 
                  меню du jour à prix doux, terrace animée.
                </p>
                <Link href="/restaurants" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  En savoir plus
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Spécialités Locales</h2>
          <p className="section-subtitle">
            Goûtez à l&apos;essence de l&apos;Eure-et-Loir à travers ses produits d&apos;exception.
          </p>
          <div className="grid grid-4">
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🧀</div>
              <h4 style={{ marginBottom: '0.25rem' }}>Fromages de Beauce</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                Pâte molle et tomme locale
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🍗</div>
              <h4 style={{ marginBottom: '0.25rem' }}>Volailles de Bresse</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                Chair délicate et raffinée
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🍯</div>
              <h4 style={{ marginBottom: '0.25rem' }}>Miel de Rambouillet</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                Saveurs florales de la forêt
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🍎</div>
              <h4 style={{ marginBottom: '0.25rem' }}>Pommes du Perche</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                Variétés anciennes et parfumées
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
