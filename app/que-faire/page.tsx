import Image from 'next/image';
import Link from 'next/link';

export default function QueFairePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-header-title">Que Faire dans l&apos;Eure-et-Loir</h1>
          <p className="page-header-subtitle">
            Activités, sites incontournables et découvertes pour animer votre séjour. 
            Entre patrimoine historique, nature et art de vivre.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section section-white">
        <div className="container">
          {/* Hero Image for Activities */}
          <div style={{ position: 'relative', width: '100%', height: '400px', marginBottom: '3rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <Image
              src="/images/aubergegilloise28-com-home-activites-foret-rambouillet.jpeg"
              alt="Forêt de Rambouillet - Randonnées et nature"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(44,36,22,0.6), transparent)' }} />
          </div>

          <h2 className="section-title">Nos Suggestions</h2>
          <p className="section-subtitle">
            Des idées d&apos;escapades pour tous les goûts, entre découvertes culturelles 
            et activités outdoor au cœur de la nature beauceronne.
          </p>

          <div className="grid grid-3">
            <article className="card">
              <Image
                src="/images/aubergegilloise28-com-home-destinations-chateau-anet.jpeg"
                alt="Château d'Anet"
                width={400}
                height={250}
                className="card-image"
              />
              <div className="card-content">
                <h3 className="card-title">Châteaux & Patrimoine</h3>
                <p className="card-description">
                  Explorez les châteaux de Maintenon, Anet, Montpipeau 
                  et laissez-vous conter des siècles d&apos;histoire.
                </p>
                <Link href="/guides/chateaux" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  Découvrir
                </Link>
              </div>
            </article>

            <article className="card">
              <Image
                src="/images/aubergegilloise28-com-home-activites-foret-rambouillet.jpeg"
                alt="Randonnées en forêt de Rambouillet"
                width={400}
                height={250}
                className="card-image"
              />
              <div className="card-content">
                <h3 className="card-title">Nature & Randonnées</h3>
                <p className="card-description">
                  Des sentiers balisés en forêt de Rambouillet aux vallées 
                  de l&apos;Eure, évadez-vous au vert.
                </p>
                <Link href="/guides/randonnees" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  Découvrir
                </Link>
              </div>
            </article>

            <article className="card">
              <Image
                src="/images/aubergegilloise28-com-restaurants-hero-bistrot-chartres.jpeg"
                alt="Cathédrale de Chartres"
                width={400}
                height={250}
                className="card-image"
              />
              <div className="card-content">
                <h3 className="card-title">Chartres & Environs</h3>
                <p className="card-description">
                  La ville de Chartres et ses trésors architecturaux, 
                  ses rues médiévales et sa cathédrale UNESCO.
                </p>
                <Link href="/guides/chartres" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  Découvrir
                </Link>
              </div>
            </article>

            <article className="card">
              <Image
                src="/images/aubergegilloise28-com-guides-hero-campagne-eure-loir.jpeg"
                alt="Campagne du Perche"
                width={400}
                height={250}
                className="card-image"
              />
              <div className="card-content">
                <h3 className="card-title">Le Perche</h3>
                <p className="card-description">
                  Terroir authentique aux portes du 28, известный для 
                  ses manoirs, ses prairies et son cheval de trait.
                </p>
                <Link href="/guides/perche" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  Découvrir
                </Link>
              </div>
            </article>

            <article className="card">
              <Image
                src="/images/aubergegilloise28-com-home-gastronomie-terroir-assiette.jpeg"
                alt="Marché local"
                width={400}
                height={250}
                className="card-image"
              />
              <div className="card-content">
                <h3 className="card-title">Marchés & Producteurs</h3>
                <p className="card-description">
                  Découvrez les marchés hebdomadaires et rencontrez 
                  les producteurs locaux passionnés.
                </p>
                <Link href="/guides/marches" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  Découvrir
                </Link>
              </div>
            </article>

            <article className="card">
              <Image
                src="/images/aubergegilloise28-com-hebergements-hero-manoir-perche.jpeg"
                alt="Événements culturels"
                width={400}
                height={250}
                className="card-image"
              />
              <div className="card-content">
                <h3 className="card-title">Événements & Festivités</h3>
                <p className="card-description">
                  Fêtes villageoises, concerts en plein air, brocantes 
                  et animations tout au long de l&apos;année.
                </p>
                <Link href="/guides/evenements" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  Découvrir
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Guides Thématiques</h2>
          <p className="section-subtitle">
            Nos guides approfondis pour planifier votre séjour selon vos envies.
          </p>
          <div className="grid grid-4">
            <Link href="/guides/weekend-couple" className="card" style={{ textAlign: 'center', padding: '2rem', textDecoration: 'none' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💑</div>
              <h4 style={{ color: 'var(--color-text)' }}>Week-end en Couple</h4>
            </Link>
            <Link href="/guides/famille-enfants" className="card" style={{ textAlign: 'center', padding: '2rem', textDecoration: 'none' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>👨‍👩‍👧‍👦</div>
              <h4 style={{ color: 'var(--color-text)' }}>Famille avec Enfants</h4>
            </Link>
            <Link href="/guides/nature-sportifs" className="card" style={{ textAlign: 'center', padding: '2rem', textDecoration: 'none' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚴</div>
              <h4 style={{ color: 'var(--color-text)' }}>Sportifs & Randonneurs</h4>
            </Link>
            <Link href="/guides/culture-patrimoine" className="card" style={{ textAlign: 'center', padding: '2rem', textDecoration: 'none' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏛️</div>
              <h4 style={{ color: 'var(--color-text)' }}>Culture & Histoire</h4>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
