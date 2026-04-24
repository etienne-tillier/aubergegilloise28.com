import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Mentions Légales - AubergeGilloise28',
  description: 'Mentions légales du site AubergeGilloise28.com',
};

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header-title">Mentions Légales</h1>
        </div>
      </section>

      <section className="section section-white">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Éditeur du site</h2>
          <p style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}>
            <strong>Nom :</strong> {siteConfig.legal.publisher}<br />
            <strong>Site web :</strong> {siteConfig.domain}<br />
            <strong>Email :</strong> {siteConfig.legal.contact}
          </p>

          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Directeur de la publication</h2>
          <p style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}>
            Le directeur de la publication est le représentant légal de {siteConfig.legal.publisher}.
          </p>

          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Hébergeur</h2>
          <p style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}>
            <strong>Hébergeur :</strong> {siteConfig.legal.host}<br />
            Le site est hébergé sur l&apos;infrastructure de Vercel Inc.
          </p>

          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Propriété intellectuelle</h2>
          <p style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}>
            L&apos;ensemble du contenu présent sur le site {siteConfig.domain} (textes, images, logos, vidéos) 
            est protégé par le droit d&apos;auteur. Toute reproduction, même partielle, est interdite 
            sans autorisation préalable.
          </p>

          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Protection des données personnelles</h2>
          <p style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}>
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression 
            de vos données personnelles. Pour exercer ce droit, contactez-nous à l&apos;adresse : 
            {siteConfig.legal.dpo}
          </p>

          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Cookies</h2>
          <p style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}>
            Ce site utilise des cookies à des fins de navigation et d&apos;analytics. 
            Vous pouvez configurer votre navigateur pour refuser les cookies.
          </p>

          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Limitation de responsabilité</h2>
          <p style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}>
            Les informations présentées sur ce site sont données à titre indicatif et peuvent 
            évoluer. {siteConfig.legal.publisher} ne saurait être tenu responsable des erreurs ou omissions.
          </p>
        </div>
      </section>
    </>
  );
}
