import './styles/main.sass'
import { Source_Sans_Pro } from 'next/font/google'

const sourceSansPro = Source_Sans_Pro({
  weight: ['200', '300', '400', '600', '700', '900'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Aurora - Leon\'s UI bricks',
  description: 'Aurora - Leon\'s UI bricks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sourceSansPro.className}>{children}</body>
    </html>
  )
}
