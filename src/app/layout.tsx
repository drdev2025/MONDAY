import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import '@/styles/globals.css';

const ProtoMono = localFont({
  src: '../../public/fonts/proto-mono.woff',
  variable: '--font-proto-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Monday AI',
  description:
    'Monday AI turns real-time news into tokens. We use DeepSeek to analyze trends, mindshare and attention. Profits used to buyback & burn $MONDAY.',
  icons: {
    icon: './images/m-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`dark ${ProtoMono.className} antialiased w-full h-full space-y-10`}
      >
        <div className="px-10 py-6 max-md:py-4 max-md:px-5 w-full">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
