import type { Metadata } from 'next';
import { Fraunces, Inter, IBM_Plex_Mono } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';
import Providers from '@/lib/providers';

const display = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'INCWORX Intelligence Group — Intelligence that moves markets. Execution that moves business.',
  description:
    'INCWORX Intelligence Group is a market intelligence, analytics, infrastructure and technology platform spanning Intelligence, Datamatics, Tectonics and Digitronics.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${inter.variable} ${plexMono.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
