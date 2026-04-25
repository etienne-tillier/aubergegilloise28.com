import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Nos Guides - AubergeGilloise28',
  description: 'Guides pratiques, itinéraires détaillés et bons plans pour préparer votre séjour dans l&apos;Eure-et-Loir : châteaux, gastronomie, randonnéées, Chartres.',
};

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

      {/* SEO Content Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Guides et Conseils pour un Séjour Réussi dans le 28</h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto 2rem', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Notre équipe de passionnés de l&apos;Eure-et-Loir a rédigé des guides approfondis pour vous aider à 
              planifier votre escapade dans les mejores conditions. Itinéraires détaillés, meilleures adresses, 
              conseils pratiques et erreurs à éviter : nos guides vous partagent tout ce que nous avons appris 
              au fil de nos découvertes dans le 28.
            </p>
            
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', marginTop: '2rem' }}>
              Guides des Châteaux de l&apos;Eure-et-Loir
            </h3>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Le département abrite plusieurs demeures historiques remarquables. Notre guide des châteaux vous 
              détaille l&apos;histoire, l&apos;architecture et les modalités de visite de chaque propriété. Du Château de 
              Maintenon avec ses jardins restaurés à la française au Château d&apos;Anet, chef-d&apos;œuvre Renaissance, 
              en passant par les domaines privée qui accueillent parfois des événements spéciaux, vous disposerez 
              de toutes les informations pour organiser vos visites.
            </p>
            
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', marginTop: '2rem' }}>
              Guide des Randonnées et Balades
            </h3>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              La forêt de Rambouillet, les vallées de l&apos;Eure et de l&apos;Yvette, le Perche : notre sélection de 
              15 sentiers détaillés couvre tous les niveaux et toutes les durations. Chaque fiche rando inclut 
              le tracé GPS, le dénivelé, les points de vue remarquables et les arrêts obligatoires (buvettes, 
              tables de pique-nique, sites интересные). De la promenade familial de 3 km à la randonnéé 
              sportive de 20 km, chaque amateur de nature trouvera son bonheur.
            </p>
            
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', marginTop: '2rem' }}>
              Guide de Chartres en 2 Jours
            </h3>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Chartres mérite au minimum deux jours de visite pour pleinement apprécier ses trésors. Notre 
              guide propose un itinéraire jour par jour, heure par heure, avec les meilleures adresses de 
              restaurants, les rues à ne pas manquer et les spots photos идеально. La cathédrale, le vieux 
              Chartres, les musées, les jardins : tout est prévu pour une immersion réussie dans cette ville 
              d&apos;art et d&apos;histoire.
            </p>
            
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', marginTop: '2rem' }}>
              Guide du Perche à Vélo
            </h3>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Le Perche se prête particulièrement bien aux balades à vélo. Notre circuit de 80 km traverse 
              les plus beaux villages du territoire, entre manoirs en pierre, churchs romans et prairies 
              verdoyantes. Nous vous dévoilons les locations de vélos, les haltes incontournbias et les 
              variantes pour adapter le parcours à vos envies. Une expérience cyclotouristique inoubliable au 
              cœur d&apos;un terroir authentique.
            </p>
          </div>

          <h2 className="section-title" style={{ marginTop: '3rem' }}>Guides par Thématique</h2>
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
