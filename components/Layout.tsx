import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';
import GoogleAnalytics from './GoogleAnalytics';
import { ReactNode } from 'react';

interface JsonLdData {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
}

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  additionalMeta?: ReactNode[];
  jsonLd?: JsonLdData;
}

export default function Layout({
  children,
  title,
  description,
  image = '/og-image.jpg',
  type = 'website',
  publishedTime,
  modifiedTime,
  tags = [],
  additionalMeta = [],
  jsonLd,
}: LayoutProps) {
  const router = useRouter();
  const siteTitle = 'Dogfood.ing';
  const fullTitle = title ? `${title} - ${siteTitle}` : siteTitle;
  const defaultDescription = 'Exploring how companies use their own products and technology';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dogfood.ing';
  const canonicalUrl = `${siteUrl}${router.asPath}`;
  const fullImageUrl = `${siteUrl}${image}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <html lang="en" />
        {/* Basic metadata */}
        <title>{fullTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={type} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description || defaultDescription} />
        <meta property="og:image" content={fullImageUrl} />
        <meta property="og:site_name" content={siteTitle} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description || defaultDescription} />
        <meta name="twitter:image" content={fullImageUrl} />

        {/* Article specific metadata */}
        {type === 'article' && (
          <>
            {publishedTime && <meta property="article:published_time" content={publishedTime} />}
            {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
            {tags.map((tag) => (
              <meta key={tag} property="article:tag" content={tag} />
            ))}
          </>
        )}

        {/* Additional meta tags */}
        {additionalMeta}

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              jsonLd || {
                '@context': 'https://schema.org',
                '@type': type === 'article' ? 'Article' : 'WebSite',
                name: fullTitle,
                description: description || defaultDescription,
                url: canonicalUrl,
                ...(type === 'article' && {
                  datePublished: publishedTime,
                  dateModified: modifiedTime,
                  author: {
                    '@type': 'Organization',
                    name: siteTitle,
                  },
                  keywords: tags.join(', '),
                }),
              }
            ),
          }}
        />
      </Head>

      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-light-accent focus:text-white focus:rounded"
      >
        Skip to main content
      </a>

      <Header />
      
      <main id="main-content" className="flex-grow" role="main">
        {children}
      </main>

      <Footer />

      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      )}
    </div>
  );
} 