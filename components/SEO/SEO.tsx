import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  keywords?: string;
}

const DEFAULT_IMAGE = "https://rocklankatours.com/og-image.jpg";
const SITE_NAME = "Rock Lanka Tours";

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  url,
  image,
  keywords,
}) => {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const seoImage = image || DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="canonical" href={url} />

      <link rel="icon" href="/logo.png" type="image/png" />

      <meta name="robots" content="index, follow" />
      
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={seoImage} />
      <meta name="twitter:url" content={url} />

      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          "name": "Rock Lanka Tours",
          "url": "https://rocklankatours.com",
          "logo": "https://rocklankatours.com/logo.png",
          "areaServed": "Sri Lanka",
          "description": "Luxury tailor made tours in Sri Lanka.",
          "sameAs": [
            "https://www.facebook.com/rocklankatours",
            "https://www.instagram.com/rocklankatours"
          ]
        }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;