import type React from 'react'
import classNames from 'classnames'

import './badge.sass'

interface Props {
  children: React.ReactNode
  color?: 'blue' | 'green' | 'red' | 'yellow'
  // TODO: icon
}

export default function Badge({
  children,
  color
}: Props) {
  return (
    <div
      className={classNames('aurora-badge', {
        [`aurora-badge--${color}`]: color
      })}
    >
      {children}
    </div>
  )
}
