import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Hébergements de Charme - AubergeGilloise28',
  description: 'Découvrez notre sélection d&apos;hébergements de charme dans l&apos;Eure-et-Loir : auberges traditionnelles, manoirs élégants, chambres d&apos;hôtes accueillantes pour un séjour authentique.',
};

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

      {/* SEO Content Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Trouvez votre Hébergement Ideal dans l&apos;Eure-et-Loir</h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto 2rem', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Le département de l&apos;Eure-et-Loir offre une diversité d&apos;hébergements remarquable, adaptés à tous les 
              budgets et toutes les envies. Des auberges de village aux châteaux privés transformés en hotels de 
              charme, chaque établissement de notre sélection a été visitée et approuvé par notre équipe.
            </p>
            
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', marginTop: '2rem' }}>
              Auberges Traditionnelles : Authentícité et Convivialité
            </h3>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Les auberges traditionnelles de l&apos;Eure-et-Loir perpétuent l&apos;art de recevoir à la française. Murs de pierre 
              apparente, poutres séculaires,cheminées à foyer ouvert : ces hébergements de caractère vous plongent 
              dans l&apos;ambiance chaleureuse de nos campagnes. La plupart propose également une restauration soignée, 
              idéal pour les séjours gastronomiques au cœur du 28.
            </p>
            
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', marginTop: '2rem' }}>
              Manoirs et Châteaux : Séjour d&apos;Exception
            </h3>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Pour un séjour d&apos;exception, les manoirs et châteaux de l&apos;Eure-et-Loir vous accueillent dans un cadre 
              préservé. Le Perche, avec ses demeures en pierre grise du XIXe siècle, constitue un choix privilégié 
              pour les couples en quête de romance. Les domaines de Maintenon et Anet offrent des expériences uniques, 
              entre histoire et raffinement contemporain.
            </p>
            
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', marginTop: '2rem' }}>
              Chambres d&apos;Hôtes : Accueil Chaleureux et Local
            </h3>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Les chambres d&apos;hôtes de l&apos;Eure-et-Loir vous font partager le quotidien de nos-hotes locaux. Petits-déjeuners 
              faits maison à base de produits de la ferme, conseils avisés pour découvrir les richesses cachées du 28, 
              et cette atmosphère familiale qui fait toute la différence. Une option idéale pour les voyageurs en quête 
              d&apos;authenticité et de contacts humains.
            </p>
          </div>

          <h2 className="section-title" style={{ marginTop: '3rem' }}>Notre Sélection</h2>
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
                <Link href="/hebergements" className="btn btn-outline" style={{ marginTop: '1rem' }}>
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
                <Link href="/hebergements" className="btn btn-outline" style={{ marginTop: '1rem' }}>
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
                <Link href="/hebergements" className="btn btn-outline" style={{ marginTop: '1rem' }}>
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
                <Link href="/hebergements" className="btn btn-outline" style={{ marginTop: '1rem' }}>
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
                <Link href="/hebergements" className="btn btn-outline" style={{ marginTop: '1rem' }}>
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
                <Link href="/hebergements" className="btn btn-outline" style={{ marginTop: '1rem' }}>
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
