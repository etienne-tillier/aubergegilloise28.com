import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Politique de Confidentialité - AubergeGilloise28',
  description: 'Politique de confidentialité et protection des données personnelles.',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header-title">Politique de Confidentialité</h1>
        </div>
      </section>

      <section className="section section-white">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Responsable du traitement</h2>
          <p style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}>
            Le responsable du traitement des données personnelles est {siteConfig.legal.publisher}, 
            éditrice du site {siteConfig.domain}.<br />
            <strong>Email de contact :</strong> {siteConfig.legal.dpo}
          </p>

          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Données collectées</h2>
          <p style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}>
            Nouscollectons les données suivantes :
          </p>
          <ul style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)', paddingLeft: '1.5rem' }}>
            <li>Données fournies via le formulaire de contact (nom, email, message)</li>
            <li>Données de navigation via Google Analytics</li>
            <li>Cookies à des fins d&apos;analytics</li>
          </ul>

          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Finalités du traitement</h2>
          <p style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}>
            Vos données sont utilisées pour :
          </p>
          <ul style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)', paddingLeft: '1.5rem' }}>
            <li>Répondre à vos demandes de contact</li>
            <li>Analyser le trafic et améliorer notre site</li>
            <li>Vous envoyer notre newsletter (avec votre consentement)</li>
          </ul>

          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Base légale</h2>
          <p style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}>
            Le traitement de vos données repose sur votre consentement pour la newsletter 
            et sur notre intérêt légitime pour l&apos;analytics.
          </p>

          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Durée de conservation</h2>
          <p style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}>
            Les données de contact sont conservées pendant 3 ans. Les données analytics 
            sont conservées conformément aux règles de Google Analytics.
          </p>

          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Vos droits</h2>
          <p style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}>
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)', paddingLeft: '1.5rem' }}>
            <li>Droit d&apos;accès à vos données</li>
            <li>Droit de rectification des données inexactes</li>
            <li>Droit à l&apos;effacement (&quot;droit à l&apos;oubli&quot;)</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
            <li>Droit d&apos;opposition au traitement</li>
          </ul>
          <p style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}>
            Pour exercer ces droits, contactez-nous à : {siteConfig.legal.dpo}
          </p>

          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Cookies</h2>
          <p style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}>
            Ce site utilise Google Analytics pour analyser le trafic. Vous pouvez refuser 
            les cookies en configurant votre navigateur. Pour plus d&apos;informations sur 
            les cookies, consultez notre page{" "}
            <a href="/mentions-legales">Mentions Légales</a>.
          </p>

          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Modifications</h2>
          <p style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)' }}>
            Nous pouvons modifier cette politique de confidentialité à tout moment. 
            La date de dernière mise à jour figure en bas de cette page.
          </p>
          <p style={{ marginTop: '3rem', color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>
      </section>
    </>
  );
}
