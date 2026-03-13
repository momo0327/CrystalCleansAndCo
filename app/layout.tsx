import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Crystal Cleans & Co – Professionell Städtjänst i Göteborg',
  description: 'Professionell städtjänst i Göteborg. Vi erbjuder flyttstädning, hemstädning, kontorsstädning och fönsterputs. Boka städning idag – kristallklara ytor, professionell perfektion.',
  generator: 'v0.dev',
  applicationName: 'Crystal Cleans & Co',
  keywords: [
    'Städning Göteborg',
    'Flyttstädning',
    'Hemstädning',
    'Fönsterputs',
    'Företagsstädning',
    'Kontorsstädning',
    'Professionell städning',
    'Svensk kvalitet',
    'Miljövänlig städning',
    'Crystal Cleans',
    'Städfirma Göteborg',
  ],
  openGraph: {
    title: 'Crystal Cleans & Co – Professionell Städtjänst i Göteborg',
    description: 'Professionell städtjänst i Göteborg. Flyttstädning, hemstädning, kontorsstädning och fönsterputs. Kristallklara ytor, professionell perfektion.',
    url: 'https://crystalcleans.se',
    siteName: 'Crystal Cleans & Co',
    locale: 'sv_SE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crystal Cleans & Co – Professionell Städtjänst',
    description: 'Professionell städtjänst i Göteborg. Boka städning idag!',
  },
  verification: {
    other: {
      'google-site-verification':
        '8q9xaiarCVuNvIat5Ikg_W0ln-8WzQtfWGn4RaxMhus',
    },
  },
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" suppressHydrationWarning>
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

      <body suppressHydrationWarning>
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
