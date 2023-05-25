import type React from 'react'

import styles from './card.module.sass'
import Icon from '@/app/components/icon/icon'

interface Props {
  children: React.ReactNode
  width?: string | number
}

export default function Card({ children, width = 'auto' }: Props) {
  return (
    <div className={styles.cardContainer} style={{ width }}>
      <Icon name="palette" color="#FFF" size="2x" bgType="square" bgColor="#1C75DB" />
      {children}
    </div>
  )
}
