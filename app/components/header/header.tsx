import type React from 'react'

import styles from './header.module.sass'

interface Props {
  title: string
  description?: string | React.ReactNode
}

export default function Header({ title, description }: Props) {
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
        <h1 className={styles.title}>{title}</h1>
        {description && <p>{description}</p>}
      </header>
    </>
  )
}
