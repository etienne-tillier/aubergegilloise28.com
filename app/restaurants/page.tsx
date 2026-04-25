import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Restaurants & Gastronomie - AubergeGilloise28',
  description: 'Découvrez les meilleurs restaurants et la gastronomie locale de l&apos;Eure-et-Loir : cuisine traditionnelle, produits du terroir, specialités régionales.',
};

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

      {/* SEO Content Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Saveurs et Gastronomie du Terroir Euréloirien</h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto 2rem', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              La gastronomie de l&apos;Eure-et-Loir celebrated les produits d&apos;exception de notre belle région. Des 
              fromages frais de la Beauce aux volailles de Bresse renommées, en passant par le miel floral de 
              la forêt de Rambouillet et les pommes anciennes du Perche, notre terroir offre une palette de 
              saveurs authentique à découvrir sans modération.
            </p>
            
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', marginTop: '2rem' }}>
              Restaurants de Charme : Cuisine Traditionnelle Revisitee
            </h3>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Les restaurants que nous recommandons dans l&apos;Eure-et-Loir车速 une cuisine authentique basée sur les 
              produits locaux et de saison. Les chefs locaux s&apos;approvisionnent directement auprès des producteurs 
              du 28, garantissant fraîcheur et traçabilité. Terrasses ombragées au bord de l&apos;Eure, salles 
              chaleureuses aux poutres apparentes : chaque établissement offre un cadre à la hauteur de sa cuisine.
            </p>
            
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', marginTop: '2rem' }}>
              Tables Gastronomiques : Création et Excellence
            </h3>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Pour les occasions spéciales, les tables gastronomiques de l&apos;Eure-et-Loir surprenent par leur créativité 
              et leur excellence. Menus saisonniers imaginés au fil des récoltes, accords mets-vins avec les crus 
              locaux, services irréprochables : ces restaurants récompensent les amateurs de haute cuisine française 
              souhaitant explorer une destination gourmande.
            </p>
            
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', marginTop: '2rem' }}>
              Bistrots de Village : Convivialité et Prix Doux
            </h3>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Les bistrots de village constituent le cœur de la vie sociale euréloirienne. Cuisine maison, меню du 
              jour à prix démocratique, terrasse animée les jours de marché : ces establishments conviviaux révèlent 
              l&apos;art de vivre de notre région. L&apos;idéal pour une pause déjeuner réussie ou un dîner décontracté entre 
              amis ou en famille.
            </p>
          </div>

          <h2 className="section-title" style={{ marginTop: '3rem' }}>Nos Adresses Gourmandes</h2>
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
