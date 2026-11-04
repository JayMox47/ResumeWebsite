import type { Metadata } from 'next';
import './globals.css';
import { ScrollReveal } from '@/components/portfolio/scroll-reveal';
export const metadata: Metadata = {
  title: 'Jonathan Mox | Network Analyst & Penn State Student',
  description:
    'Jonathan Mox is a Pittsburgh-based Network Analyst and Penn State Enterprise Technology Integration student with experience in IT infrastructure, device deployment, and team leadership.',
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body id="top">
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
