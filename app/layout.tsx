import type { Metadata } from 'next'
import './globals.css'

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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sv">
      <head>
        {/* ✅ Usercentrics scripts – must come before any scripts that require consent */}
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
      <body>{children}</body>
    </html>
  )
}
