import { Providers } from './providers';

export const metadata = {
  metadataBase: new URL('https://ftn.domains'),
  title: 'FTN DOMAINS',
  description: 'Bahamut Name Service. Decentralised naming for Wallets & more',
  keywords:
    'ftn, ens, bns, bahmut name service, fastext, opengate, ftn domains',
  openGraph: {
    images: '/opengraph-image.png',
    title: 'FTN DOMAINS',
    description:
      'Bahamut Name Service. Decentralised naming for Wallets & more',
    siteName: 'FTN DOMAINS',
    url: 'https://ftn.domains',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
