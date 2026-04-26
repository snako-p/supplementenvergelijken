import React from 'react';
import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://www.supplementenvergelijken.be';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

export default function SEO({
  title,
  description,
  canonical,
  image = DEFAULT_IMAGE,
  type = 'website',
  schema = null,
  noindex = false,
}) {
  const fullTitle = title
    ? `${title} | SupplementenVergelijken.be`
    : 'SupplementenVergelijken.be — Onafhankelijk supplementen vergelijken in België';

  const fullCanonical = canonical ? `${BASE_URL}${canonical}` : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'} />
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={image} />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      <meta property="og:site_name" content="SupplementenVergelijken.be" />
      <meta property="og:locale" content="nl_BE" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={image} />

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
