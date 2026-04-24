import Image from 'next/image';
import Link from 'next/link';

export default function HebergementsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-header-title">Hébergements de Charme</h1>
          <p className="page-header-subtitle">
            Auberges traditionnelles, manoirs élégants, chambres d&apos;hôtes accueillantes : 
            découvrez notre sélection d&apos;hébergements pour un séjour authentique dans le 28.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section section-white">
        <div className="container">
          {/* Hero Image for Hebergements */}
          <div style={{ position: 'relative', width: '100%', height: '400px', marginBottom: '3rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <Image
              src="/images/aubergegilloise28-com-hebergements-hero-manoir-perche.jpeg"
              alt="Manoir du Perche - Hébergement de prestige en Eure-et-Loir"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(44,36,22,0.6), transparent)' }} />
          </div>

          <h2 className="section-title">Notre Sélection</h2>
          <p className="section-subtitle">
            Chaque hébergement a été visitée et approuvé par notre équipe pour garantir 
            qualité d&apos;accueil et authenticité.
          </p>

          <div className="grid grid-3">
            <article className="card">
              <Image
                src="/images/aubergegilloise28-com-home-hebergements-auberge-pierre.jpeg"
                alt="Auberge en pierre - Hébergement de charme"
                width={400}
                height={250}
                className="card-image"
              />
              <div className="card-content">
                <h3 className="card-title">Auberge de la Pierre</h3>
                <p className="card-description">
                  Une auberge traditionnelle aux murs de pierre apparente, 
                  offrant une cuisine du terroir et des chambres de caractère.
                </p>
                <Link href="/hebergements/auberge-pierre" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  En savoir plus
                </Link>
              </div>
            </article>

            <article className="card">
              <Image
                src="/images/aubergegilloise28-com-hebergements-hero-manoir-perche.jpeg"
                alt="Manoir du Perche"
                width={400}
                height={250}
                className="card-image"
              />
              <div className="card-content">
                <h3 className="card-title">Manoir du Perche</h3>
                <p className="card-description">
                  Ancien manoir du XIXe siècle, niché dans un parc de 3 hectares. 
                  Charme et raffinement pour un séjour d&apos;exception.
                </p>
                <Link href="/hebergements/manoir-perche" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  En savoir plus
                </Link>
              </div>
            </article>

            <article className="card">
              <Image
                src="/images/aubergegilloise28-com-home-destinations-chateau-anet.jpeg"
                alt="Chambre d'hôtes près du Château d'Anet"
                width={400}
                height={250}
                className="card-image"
              />
              <div className="card-content">
                <h3 className="card-title">Les Chambres du Château</h3>
                <p className="card-description">
                  À quelques pas du Château d&apos;Anet, quatre chambres élégantes 
                  dans un корпус de зависимости restauré avec goût.
                </p>
                <Link href="/hebergements/chambres-chateau-anet" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  En savoir plus
                </Link>
              </div>
            </article>

            <article className="card">
              <Image
                src="/images/aubergegilloise28-com-guides-hero-campagne-eure-loir.jpeg"
                alt="Chambre d'hôtes en pleine campagne"
                width={400}
                height={250}
                className="card-image"
              />
              <div className="card-content">
                <h3 className="card-title">La Ferme de la Beauce</h3>
                <p className="card-description">
                  Authentique ferme beauceronne convertie en chambre d&apos;hôte. 
                  Petit-déjeuner fermier et accueil chaleureux garanti.
                </p>
                <Link href="/hebergements/ferme-beauce" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  En savoir plus
                </Link>
              </div>
            </article>

            <article className="card">
              <Image
                src="/images/aubergegilloise28-com-home-activites-foret-rambouillet.jpeg"
                alt="Gîte en forêt de Rambouillet"
                width={400}
                height={250}
                className="card-image"
              />
              <div className="card-content">
                <h3 className="card-title">Le Gîte de la Forêt</h3>
                <p className="card-description">
                  Niché aux abords de la forêt de Rambouillet, ce gîte offre 
                  calme absolu et accès direct aux sentiers forestiers.
                </p>
                <Link href="/hebergements/gite-foret" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  En savoir plus
                </Link>
              </div>
            </article>

            <article className="card">
              <Image
                src="/images/aubergegilloise28-com-home-gastronomie-terroir-assiette.jpeg"
                alt="Hôtel gastronomique"
                width={400}
                height={250}
                className="card-image"
              />
              <div className="card-content">
                <h3 className="card-title">Hôtel du Marché</h3>
                <p className="card-description">
                  Hôtel de standing au cœur d&apos;un village pittoresque. 
                  Restaurant gastronomique et cave à vins remarquable.
                </p>
                <Link href="/hebergements/hotel-marche" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  En savoir plus
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Vous êtes hébergeur dans le 28 ?</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Proposez votre établissement pour figurer dans notre guide et touche 
            une audience de tourists en quête d&apos;authenticité.
          </p>
          <Link href="/contact" className="btn btn-secondary">
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
