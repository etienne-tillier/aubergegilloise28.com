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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Nous écrire</h2>
              <form>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                    Votre nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '2px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem',
                      fontFamily: 'var(--font-body)',
                    }}
                  />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                    Votre email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '2px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem',
                      fontFamily: 'var(--font-body)',
                    }}
                  />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="subject" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '2px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="partnership">Partenariat / Collaboration</option>
                    <option value="hebergement">Proposer un hébergement</option>
                    <option value="restaurant">Proposer un restaurant</option>
                    <option value="general">Question générale</option>
                    <option value="feedback">Retour / Suggestion</option>
                  </select>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '2px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem',
                      fontFamily: 'var(--font-body)',
                      resize: 'vertical',
                    }}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Envoyer le message
                </button>
              </form>
            </div>

            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Autres moyens de contact</h2>
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-secondary)' }}>Email</h4>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  <a href={`mailto:${siteConfig.legal.contact}`}>{siteConfig.legal.contact}</a>
                </p>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-secondary)' }}>Contact RGPD /DPO</h4>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  <a href={`mailto:${siteConfig.legal.dpo}`}>{siteConfig.legal.dpo}</a>
                </p>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-secondary)' }}>Réseaux sociaux</h4>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Suivez-nous sur nos réseaux pour découvrir nos dernières découvertes et bons plans.
                </p>
              </div>

              <div style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: 'var(--color-background-alt)', borderRadius: 'var(--radius-lg)' }}>
                <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-secondary)' }}>Pour les hébergeurs et restaurateurs</h4>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem' }}>
                  Vous souhaitez figurer dans notre guide ? Proposez-nous votre établissement 
                  et touchea notre audience de touristes en quête d&apos;authenticité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
