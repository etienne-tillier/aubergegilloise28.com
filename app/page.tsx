import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" aria-label="Bienvenue">
        <Image
          src="/images/aubergegilloise28-com-home-hero-chateau-maintenon.jpeg"
          alt="Château de Maintenon - Joyau du patrimoine de l'Eure-et-Loir"
          fill
          className="hero-image"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">
            Découvrez l&apos;Eure-et-Loir Authentique
          </h1>
          <p className="hero-subtitle">
            Châteaux enchanteurs, auberges de charme, gastronomie du terroir : 
            votre guide pour explorer les trésors cachés du 28.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/hebergements" className="btn btn-primary">
              Nos Hébergements
            </Link>
            <Link href="/guides" className="btn btn-accent">
              Nos Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction SEO Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Votre Guide Tourist complete de l&apos;Eure-et-Loir</h2>
          <p className="section-subtitle">
            Bienvenue sur AubergeGilloise28, le guide touristique de référence pour découvrir 
            les hébergements de charme, restaurants gastronomiques et activités incontournable du 28.
          </p>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              L&apos;Eure-et-Loir, département situé aux portes de l&apos;Île-de-France, offre une escapade idéale 
              pour les voyageurs en quête d&apos;authenticité. Entre la forêt de Rambouillet, les châteaux de la Loire 
              et les villages pittoresques du Perche, cette région regorge de trésors à découvrir.
            </p>
            
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', marginTop: '2rem' }}>
              Hébergements de Charme pour un Séjour Inoubliable
            </h3>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Que vous cherchiez une auberge traditionnelle aux murs de pierre apparente, un manoir élégant 
              du XIXe siècle ou une chambre d&apos;hôte accueillante chez l&apos;habitant, notre sélection d&apos;hébergements 
              dans l&apos;Eure-et-Loir répond à toutes vos envies. Le Perche, avec ses manoirs en pierre grise et ses 
              prairies verdoyantes, constitue un cadre idyllique pour les couples en quête de romance. La Beauce, 
              grenier de la France, offre des expériences authentiques dans d&apos;anciennes fermes restaurées avec goût.
            </p>
            
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', marginTop: '2rem' }}>
              Gastronomie du Terroir : Saveurs et Producte locaux
            </h3>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              La gastronomie euréloirienne célèbre les produits d&apos;exception de notre belle région. Fromages frais 
              de la Beauce, volailles de Bresse renommées, miel floral de la forêt de Rambouillet, pommes anciennes 
              du Perche et vins de pays caractérise notre table. Les restaurants que nous recommandons privilégient 
              les circuits courts et les recettes traditionnelles revisitées avec talent.
            </p>
            
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', marginTop: '2rem' }}>
              Patrimoine et Sites à Découvrir
            </h3>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Le patrimoine de l&apos;Eure-et-Loir témoigne de siècles d&apos;histoire fascinante. Le Château de Maintenon, 
              ancienne demeure de Madame de Maintenon, enchante les visiteurs par sa magnificence. Le Château d&apos;Anet, 
              chef-d&apos;œuvre Renaissance, illustre le raffinement de l&apos;architecture française. Chartres, avec sa 
              cathédrale gothique inscrite au patrimoine mondial de l&apos;UNESCO, constitue une étape incontournable 
              pour les amateurs d&apos;art et d&apos;histoire.
            </p>
            
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', marginTop: '2rem' }}>
              Activités Outdoor et Nature
            </h3>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Les amateurs de plein air trouveront leur bonheur dans l&apos;Eure-et-Loir. La forêt de Rambouillet propose 
              des sentiers balisés pour des randonnée pedestre ou vtt.accessibles à tous les niveaux. Les vallées de 
              l&apos;Eure et de l&apos;Yvette offrent des promenades ombragées au bord de l&apos;eau, ideales pour les journée 
              ensoleillées. Le Perche invites également aux balades à vélo à travers son bocage préservé, entre manoirs 
              en pierre et prairies fleuries.
            </p>
          </div>
        </div>
      </section>

      {/* Hébergements Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Hébergements de Charme</h2>
          <p className="section-subtitle">
            Sélection d&apos;auberges, hôtels et chambres d&apos;hôtes pour un séjour inoubliable 
            dans nos campagnes vallonnées.
          </p>
          <div className="grid grid-3">
            <article className="card">
              <Image
                src="/images/aubergegilloise28-com-home-hebergements-auberge-pierre.jpeg"
                alt="Auberge en pierre de taille - Hébergement de charme"
                width={400}
                height={300}
                className="card-image"
              />
              <div className="card-content">
                <h3 className="card-title">Auberges de Pierre</h3>
                <p className="card-description">
                  Des auberges authentiques aux murs de pierre apparente, 
                  où le charme de l&apos;ancien rencontre le confort moderne.
                </p>
                <Link href="/hebergements" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  Découvrir
                </Link>
              </div>
            </article>
            <article className="card">
              <Image
                src="/images/aubergegilloise28-com-hebergements-hero-manoir-perche.jpeg"
                alt="Manoir du Perche - Hébergement de prestige"
                width={400}
                height={300}
                className="card-image"
              />
              <div className="card-content">
                <h3 className="card-title">Manoirs & Châteaux</h3>
                <p className="card-description">
                  Séjournez dans des demeures de caractère, témoins silencieux 
                  de siècles d&apos;histoire et de raffinement.
                </p>
                <Link href="/hebergements" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  Découvrir
                </Link>
              </div>
            </article>
            <article className="card">
              <Image
                src="/images/aubergegilloise28-com-home-destinations-chateau-anet.jpeg"
                alt="Château deAnet - Hébergement près du patrimoine"
                width={400}
                height={300}
                className="card-image"
              />
              <div className="card-content">
                <h3 className="card-title">Chambres d&apos;Hôtes</h3>
                <p className="card-description">
                  L&apos;accueil chaleureux deshosts locaux et des petits-déjeuners 
                  faits maison pour une expérience authentique.
                </p>
                <Link href="/hebergements" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  Découvrir
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Gastronomie Section */}
      <section className="section section-white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2 className="section-title">Gastronomie du Terroir</h2>
              <p className="section-subtitle">
                Savourez les spécialités de l&apos;Eure-et-Loir : de la cuisine traditionnelle 
                aux créations gastronomiques, un voyage culinaire unique.
              </p>
              <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-secondary)' }}>
                Fromages frais de la Beauce, volailles de Bresse, miel des forêt de Rambouillet, 
                pommes du Perche et vins de pays... Notre gastronomie locale celebrate 
                les produits d&apos;exception de nos campagnes.
              </p>
              <Link href="/restaurants" className="btn btn-secondary">
                Explorer les Restaurants
              </Link>
            </div>
            <div>
              <Image
                src="/images/aubergegilloise28-com-home-gastronomie-terroir-assiette.jpeg"
                alt="Assiette de spécialités du terroir Euréloirien"
                width={600}
                height={450}
                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Que Faire Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Que Faire dans le 28</h2>
          <p className="section-subtitle">
            Activités,sites incontournables et découvertes pour animer votre séjour 
            entre patrimoine et nature.
          </p>
          <div className="grid grid-2">
            <article className="card" style={{ display: 'flex' }}>
              <Image
                src="/images/aubergegilloise28-com-home-activites-foret-rambouillet.jpeg"
                alt="Forêt de Rambouillet - Randonnées et nature"
                width={300}
                height={250}
                style={{ objectFit: 'cover', width: 300, height: 220 }}
              />
              <div className="card-content">
                <h3 className="card-title">Nature & Randonnées</h3>
                <p className="card-description">
                  Explorez la forêt de Rambouillet, les vallées de l&apos;Eure et de l&apos;Yvette. 
                  Des sentiers balisés pour tous les niveaux.
                </p>
                <Link href="/que-faire" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  En savoir plus
                </Link>
              </div>
            </article>
            <article className="card" style={{ display: 'flex' }}>
              <Image
                src="/images/aubergegilloise28-com-guides-hero-campagne-eure-loir.jpeg"
                alt="Campagne de l'Eure-et-Loir - Patrimoine rural"
                width={300}
                height={250}
                style={{ objectFit: 'cover', width: 300, height: 220 }}
              />
              <div className="card-content">
                <h3 className="card-title">Patrimoine & Culture</h3>
                <p className="card-description">
                  Châteaux de la Loire, cathédrales, villages de charme : 
                  un héritage culturel exceptionnel à découvrir.
                </p>
                <Link href="/guides" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  En savoir plus
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Blog Section - Articles from Supabase API */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">Nos Derniers Articles</h2>
          <p className="section-subtitle">
            Guides pratiques, bons plans et découvertes pour vous aider à planifier votre séjour.
          </p>
          <div style={{ textAlign: 'center', padding: '3rem 2rem' }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>
              Aucun article pour le moment.
            </p>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/blog" className="btn btn-primary">
              Voir tous nos articles
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div className="trust-number">28</div>
              <div className="trust-label">Communes explorées</div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2.25 2.25L9 9.75m6 6.75l3-3.75L21 6.75M3 18.25V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v12a2.25 2.25 0 01-2.25 2.25H6z" />
                </svg>
              </div>
              <div className="trust-number">50+</div>
              <div className="trust-label">Hébergements reference</div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="trust-number">100+</div>
              <div className="trust-label">Guides & articles</div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="trust-number">Recommandé</div>
              <div className="trust-label">Par les locaux</div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "AubergeGilloise28",
            "url": siteConfig.url,
            "description": "Guide touristique complet pour découvrir l'Eure-et-Loir : hébergements de charme, restaurants gastronomiques, activités et sites remarquables.",
            "keywords": "Eure-et-Loir, tourisme, hébergements charme, restaurants, châteaux, Chartres, Rambouillet, Perche, chambre d'hôte, auberge",
            "inLanguage": "fr-FR",
            "about": {
              "@type": "Place",
              "name": "Eure-et-Loir",
              "description": "Département français situé aux portes de l'Île-de-France"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127"
            }
          })
        }}
      />
    </>
  );
}
