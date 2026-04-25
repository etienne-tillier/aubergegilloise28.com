import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Contact - AubergeGilloise28',
  description: 'Contactez l\'équipe d\'AubergeGilloise28 pour vos questions ou partenariats.',
};

export default function ContactPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header-title">Contactez-nous</h1>
          <p className="page-header-subtitle">
            Une question, une suggestion, un partenariat ? Nous sommes à votre écoute.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', padding: '3rem 2rem' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Parlons de votre projet</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Que vous soyez un voyageur en quête de recommandations pour votre prochain séjour dans l&apos;Eure-et-Loir, 
              un hébergeur souhaitant apparaître dans notre guide, ou un restaurateur voulant mettre en avant votre établissement, 
              nous sommes à votre écoute.
            </p>
            <p style={{ marginBottom: '2rem', color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
              N&apos;hésitez pas à nous envoyer un email directement. Nous vous répondrons dans les plus brefs délais, 
              généralement sous 24 à 48 heures.
            </p>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.75rem',
              padding: '1.5rem 2.5rem',
              backgroundColor: 'var(--color-background-alt)',
              borderRadius: 'var(--radius-lg)',
              marginTop: '1rem'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ color: 'var(--color-secondary)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <a 
                href={`mailto:${siteConfig.legal.contact}`}
                style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 600,
                  color: 'var(--color-secondary)',
                  textDecoration: 'none'
                }}
              >
                {siteConfig.legal.contact}
              </a>
            </div>
          </div>

          <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--color-background-alt)', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--color-secondary)' }}>Pour les hébergeurs et restaurateurs</h3>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              Vous souhaitez figurer dans notre guide des hébergements de charme ou notre sélection de restaurants 
              gastronomiques dans l&apos;Eure-et-Loir ? Envoyez-nous un email avec la description de votre établissement, 
              quelques photos et vos coordonnées. Notre équipe étudie chaque proposition avec soin pour garantir 
              la qualité de notre sélection aux visiteurs du 28.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
