import type React from 'react'

import styles from './card.module.sass'

interface Props {
  children: React.ReactNode
  width?: string | number
}

export default function Card({ children, width = 'auto' }: Props) {
  return (
    <div className={`aurora-card ${styles.cardContainer}`} style={{ width }}>
      <div className={styles.body}>
        {children}
      </div>
    </div>
  )
}
