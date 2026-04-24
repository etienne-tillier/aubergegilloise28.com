import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.title,
    template: '%s | AubergeGilloise28',
  },
  description: siteConfig.seo.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.seo.ogTitle,
    description: siteConfig.seo.ogDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.ogTitle,
    description: siteConfig.seo.ogDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-FR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Sans+3:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <header className="header">
          <div className="header-inner">
            <Link href="/" className="logo">
              AubergeGilloise28
            </Link>
            <nav className="nav" aria-label="Navigation principale">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main id="main-content">{children}</main>
        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-grid">
              <div>
                <div className="footer-brand">AubergeGilloise28</div>
                <p className="footer-description">
                  Votre guide touristique complet pour découvrir l&apos;Eure-et-Loir : 
                  hébergements de charme, restaurants gastronomiques, activités et 
                  sites remarquables. Explorez les trésors cachés de notre région 
                  aux portes de l&apos;Île-de-France.
                </p>
              </div>
              <div>
                <div className="footer-title">Navigation</div>
                <div className="footer-links">
                  {siteConfig.navigation.map((item) => (
                    <Link key={item.href} href={item.href} className="footer-link">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <div className="footer-title">Informations</div>
                <div className="footer-links">
                  <Link href="/mentions-legales" className="footer-link">
                    Mentions légales
                  </Link>
                  <Link href="/politique-confidentialite" className="footer-link">
                    Politique de confidentialité
                  </Link>
                  <Link href="/contact" className="footer-link">
                    Contact
                  </Link>
                </div>
              </div>
              <div>
                <div className="footer-title">Contact</div>
                <div className="footer-links">
                  <span className="footer-link">{siteConfig.legal.contact}</span>
                  <span className="footer-link">{siteConfig.legal.host}</span>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} {siteConfig.legal.publisher}. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
