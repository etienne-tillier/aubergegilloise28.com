import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Que Faire dans l&apos;Eure-et-Loir - AubergeGilloise28',
  description: 'Activités, sites incontournable et découvertes dans l&apos;Eure-et-Loir : châteaux, forêts, randonnéés, marchés et patrimoine pour un séjour riche en émotions.',
};

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

      {/* SEO Content Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Explorér l&apos;Eure-et-Loir : Activités pour Tous les Goûts</h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto 2rem', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              L&apos;Eure-et-Loir constitue une destination idéale pour les vacanciers en quête de diversité. Entre 
              patrimoine historique remarquable, nature préservée et art de vivre authentique, ce département des 
              portes de l&apos;Île-de-France offre un panel d&apos;activités incomparable pour un week-end ou un séjour 
              de plusieurs jours.
            </p>
            
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', marginTop: '2rem' }}>
              Châteaux et Patrimoine Historique
            </h3>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Le patrimoine nobiliaire de l&apos;Eure-et-Loir impressionne par sa richesse et sa diversité. Le Château 
              de Maintenon, ancienne résidence de Madame de Maintenon, dévoile ses jardins à la française et son 
              histoire royale. Le Château d&apos;Anet, chef-d&apos;œuvre architectural signé Philibert Delorme, représente 
              l&apos;essor de la Renaissance française. À proximité, les châteaux de Montpipeau et de Boisourd 
              étabissent un circuit de découverte fascinant pour les amateurs d&apos;histoire et d&apos;architecture.
            </p>
            
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', marginTop: '2rem' }}>
              Nature et Randonnées en Forêt de Rambouillet
            </h3>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              La forêt de Rambouillet occupe une place majeure dans l&apos;offre nature du 28. Ses 20 000 hectares 
              de bois et forêts proposent des sentiers balisés pour tous les niveaux, des promenades familiales 
              aux randonnée exigeantes. L&apos;étang de la Tour, le relais des routers, le chaos de granit de 
              Saint-Léonard : autant de sites remarquables à découvrir au fil de vos balades. Les vallées de 
              l&apos;Eure et de l&apos;Yvette offrent également des parcours ombragés le long des cours d&apos;eau, идеально 
              pour les journées ensoleillées.
            </p>
            
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', marginTop: '2rem' }}>
              Chartres : Ville d&apos;Art et d&apos;Histoire
            </h3>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Chartres, chef-lieu du département, séduit par sa cathédrale gothique inscrite au patrimoine 
              mondial de l&apos;UNESCO. Ses rues médiévales, ses boutiques d&apos;artisans, ses cafés-conviviaux 
              invitent à la flânerie. Ne manquez pas le vieux Chartres avec ses maisons à pans de bois, 
              la crypte archéologique et le panorama depuis le beffroi. Les marchés hebdomadaires animent 
              la ville les mardis et samedis, offrant une immersion authentique dans la vie locale.
            </p>
            
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', marginTop: '2rem' }}>
              Le Perche : Terroir Authentique aux Portes du 28
            </h3>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Le Perche, territoire de bocages et de manoirs en pierre grise, constitue une destination prisée 
              pour les week-ends romantiques. Les circuits à vélo dévoilent un patrimoine rural exceptionne, 
              entre fermes traditionnelles, churchs romans et prairies bordées de haies vives. Le cheval de trait 
              percheron, race locale emblématique, rythme la vie de ce territoire authentique où il fait bon 
              vivre et découvrir.
            </p>
          </div>

          <h2 className="section-title" style={{ marginTop: '3rem' }}>Nos Suggestions</h2>
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
                <Link href="/guides" className="btn btn-outline" style={{ marginTop: '1rem' }}>
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
                <Link href="/guides" className="btn btn-outline" style={{ marginTop: '1rem' }}>
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
                <Link href="/guides" className="btn btn-outline" style={{ marginTop: '1rem' }}>
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
                  Terroir authentique aux portes du 28, известный pour 
                  ses manoirs, ses prairies et son cheval de trait.
                </p>
                <Link href="/guides" className="btn btn-outline" style={{ marginTop: '1rem' }}>
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
                <Link href="/guides" className="btn btn-outline" style={{ marginTop: '1rem' }}>
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
                <Link href="/guides" className="btn btn-outline" style={{ marginTop: '1rem' }}>
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
            <Link href="/guides" className="card" style={{ textAlign: 'center', padding: '2rem', textDecoration: 'none' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💑</div>
              <h4 style={{ color: 'var(--color-text)' }}>Week-end en Couple</h4>
            </Link>
            <Link href="/guides" className="card" style={{ textAlign: 'center', padding: '2rem', textDecoration: 'none' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>👨‍👩‍👧‍👦</div>
              <h4 style={{ color: 'var(--color-text)' }}>Famille avec Enfants</h4>
            </Link>
            <Link href="/guides" className="card" style={{ textAlign: 'center', padding: '2rem', textDecoration: 'none' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚴</div>
              <h4 style={{ color: 'var(--color-text)' }}>Sportifs & Randonneurs</h4>
            </Link>
            <Link href="/guides" className="card" style={{ textAlign: 'center', padding: '2rem', textDecoration: 'none' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏛️</div>
              <h4 style={{ color: 'var(--color-text)' }}>Culture & Histoire</h4>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
