import { Providers } from './providers';

export const metadata = {
  title: 'FTN DOMAINS',
  description: 'Name Service for FTN',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <meta name='description' content='Bahamut Name Service.' />
        <meta
          name='keywords'
          content='ftn, ens, bns, bahmut name service, fastext, opengate, ftn domains'
        />
        <meta name='author' content='FTN' />
        <meta name='title' content='FTN.DOMAINS' />
        <meta name='og:title' property='og:title' content='FTN.DOMAINS' />
        <meta
          name='og:description'
          property='og:description'
          content='Bahamut Name Service.'
        />
        <meta name='og:image' property='og:image' content='/og-image.png' />
      </head>
      <body>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
