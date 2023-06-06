import type React from 'react'
import classNames from 'classnames'

import styles from './card.module.sass'

interface Props {
  children: React.ReactNode
  width?: string | number
  height?: string | number
  hasBorder?: boolean
}

/**
 * TODO: this component should be called "WidgetWrapper" instead of "Card"
 * TODO: as "Card" will be used within "WidgetWrapper". Cf. Forecast design
 */

export default function Card({
  children,
  width = 'auto',
  height = 'auto',
  hasBorder = true
}: Props) {
  return (
    <div
      className={classNames({
        'aurora-card': true,
        [styles.cardContainer]: true,
        [styles.noBorder]: !hasBorder
      })}
      style={{ width, height }}
    >
      <div className={styles.body}>
        {children}
      </div>
    </div>
  )
}
