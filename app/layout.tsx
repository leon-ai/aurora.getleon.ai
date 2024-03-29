import type { Metadata } from 'next'

import './styles/main.sass'

export const metadata: Metadata = {
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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap"
          rel="stylesheet"
        />
        <link href="https://aurora.getleon.ai/css/remixicon-3.4.0.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
