import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Skinande rent – din pålitliga städpartner',
  description: 'Skinande rent – din pålitliga städpartner',
  generator: 'v0.dev',
  applicationName: 'Crystal Cleans & Co',
  keywords: [
    'Städning',
    'Flyttstädning',
    'Hemstädning',
    'Fönsterputs',
    'Företagsstädning',
    'Professionell städning',
    'Svensk kvalitet',
    'Miljövänlig städning',
  ],
  verification: {
    other: {
      'google-site-verification':
        '8q9xaiarCVuNvIat5Ikg_W0ln-8WzQtfWGn4RaxMhus',
    },
  },
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <head>
        <script
          src="https://web.cmp.usercentrics.eu/modules/autoblocker.js"
          async
        ></script>
        <script
          id="usercentrics-cmp"
          src="https://web.cmp.usercentrics.eu/ui/loader.js"
          data-settings-id="AQgFtXTB_3geBM"
          async
        ></script>
      </head>

      <body>
        {/* ⭐ Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-47ZP0GW9XS"
          strategy="afterInteractive"
        />

        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-47ZP0GW9XS');
          `}
        </Script>

        {children}
      </body>
    </html>
  )
}
