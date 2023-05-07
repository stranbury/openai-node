import '@styles/global.css'
import { NavBar , Footer} from '@components'
import type { AppProps } from 'next/app'
import StoreWrapper from '@store/provider'
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoreWrapper>
      <html lang="en" data-theme="cupcake">
        <head>
          <meta charSet="utf-8" />
          <meta name="description" content={metadata.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </head>
        
        <body>
          <NavBar />
          <main>{children}</main>
          <Footer />
      
        </body>
      </html>
    </StoreWrapper>
  )
}
