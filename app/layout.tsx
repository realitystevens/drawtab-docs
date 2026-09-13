import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { ReactNode } from 'react'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  title: {
    default: 'Drawtab Docs',
    template: '%s — Drawtab Docs',
  },
  description:
    'Official API documentation for Drawtab — generate dynamic images and graphics on demand via a simple REST API.',
  icons: {
    icon: '/favicon.svg',
  },
}

const navbar = <Navbar logo={<b>Drawtab</b>} />

const footer = <Footer>Drawtab</Footer>

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout navbar={navbar} pageMap={await getPageMap()} footer={footer}>
          {children}
        </Layout>
      </body>
    </html>
  )
}
