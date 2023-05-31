'use client'

import type React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './header.module.sass'

interface Props {
  title: string
  description?: string | React.ReactNode
}

export default function Header({ title, description }: Props) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <>
      <svg className={styles.bgGrid} width="971" viewBox="0 0 971 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M970 0V191.5C970 195.918 966.418 199.5 962 199.5H485.5H8.99999C4.58172 199.5 1 195.918 1 191.5V0M243.25 199.5V0M727.75 199.5V0M970 99.75H1" stroke="url(#paint0_linear_7_59)" strokeDasharray="5 5"/>
        <defs>
          <linearGradient id="paint0_linear_7_59" x1="1" y1="0" x2="79.8066" y2="382.775" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1C75DB" stopOpacity="0.75"/>
            <stop offset="0.5" stopColor="#1C75DB" stopOpacity="0.25"/>
            <stop offset="1" stopColor="#1C75DB" stopOpacity="0.75"/>
          </linearGradient>
        </defs>
      </svg>
      <header>
        {!isHome && (
          <Link href="/" style={{ position: 'absolute' }}>
            <svg className={styles.backIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
              <path d="M4.83594 12.0001L11.043 18.2072L12.4573 16.793L7.66436 12.0001L12.4573 7.20718L11.043 5.79297L4.83594 12.0001ZM10.4858 12.0001L16.6929 18.2072L18.1072 16.793L13.3143 12.0001L18.1072 7.20718L16.6929 5.79297L10.4858 12.0001Z" />
            </svg>
          </Link>
        )}
        <div>
          <h1 className={styles.title}>{title}</h1>
          {description && <p>{description}</p>}
        </div>
      </header>
    </>
  )
}
