import type React from 'react'

import styles from './card.module.sass'

interface Props {
  children: React.ReactNode
  width?: string | number
  height?: string | number
}

export default function Card({ children, width = 'auto', height = 'auto' }: Props) {
  return (
    <div className={`aurora-card ${styles.cardContainer}`} style={{ width, height }}>
      <div className={styles.body}>
        {children}
      </div>
    </div>
  )
}
