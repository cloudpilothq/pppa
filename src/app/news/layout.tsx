import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Media Center | DSPPPPA',
  description: 'Latest news, press releases, enforcement actions, and property safety advisories from the Delta State Public and Private Properties Protection Agency (DSPPPPA).',
  openGraph: {
    title: 'News & Media Center | DSPPPPA Delta State',
    description: 'Latest news, press releases, enforcement actions and property safety advisories from the DSPPPPA.',
    url: 'https://dsppppa.delta.gov.ng/news',
    siteName: 'DSPPPPA Delta State',
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'News & Media Center | DSPPPPA',
    description: 'Latest news, press releases, and enforcement actions from the DSPPPPA.',
  },
  alternates: {
    canonical: 'https://dsppppa.delta.gov.ng/news',
  },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


