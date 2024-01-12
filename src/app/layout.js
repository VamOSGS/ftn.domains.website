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
      </head>
      <body>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
