import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Media Center | DSPPPPA',
  description: 'Stay informed with the latest press releases, enforcement actions, and property safety advisories from the Delta State Public and Private Property Protection Agency.',
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
