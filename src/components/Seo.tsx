import { Helmet } from 'react-helmet-async';
import type { AppPage } from '../types/navigation';
import { SITE_NAME, SITE_URL, TWITTER_HANDLE } from '../seo/constants';
import { getPageSeo } from '../seo/pageSeo';
import { schemasForPage } from '../seo/structuredData';

interface SeoProps {
  page: AppPage;
}

export default function Seo({ page }: SeoProps) {
  const seo = getPageSeo(page);
  const canonicalUrl = `${SITE_URL}${seo.path}`;
  const ogImage = `${SITE_URL}${seo.ogImage ?? '/hero-image.png'}`;
  const robots = seo.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
  const jsonLd = JSON.stringify(schemasForPage(page));

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords.join(', ')} />
      <meta name="author" content={SITE_NAME} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_NG" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={`${SITE_NAME} — school management platform dashboard`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${SITE_NAME} — school management platform`} />

      <script type="application/ld+json">{jsonLd}</script>
    </Helmet>
  );
}
