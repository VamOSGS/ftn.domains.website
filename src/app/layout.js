import { Providers } from './providers';

export const metadata = {
  title: 'FTN DOMAINS',
  description:
    'Bahamut Name Service. Decentralised naming for Asset Wallets & more',
  keywords:
    'ftn, ens, bns, bahmut name service, fastext, opengate, ftn domains',
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
