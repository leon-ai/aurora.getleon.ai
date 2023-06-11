import type React from 'react'
import classNames from 'classnames'

import './text.sass'

/*const FONT_SIZES = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl'
} as const*/

interface Props {
  children: React.ReactNode
  // fontSize?: typeof FONT_SIZES[keyof typeof FONT_SIZES]
  fontSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  fontWeight?: 'regular' | 'semi-bold'
  secondary?: boolean
}

export default function Text({
  children,
  fontSize,
  fontWeight,
  secondary
}: Props) {
  return (
    <p
      className={classNames('aurora-text', {
        'aurora-text--secondary': secondary,
        [`aurora-text--${fontSize}`]: fontSize,
        [`aurora-text--${fontWeight}`]: fontWeight
      })}
    >
      {children}
    </p>
  )
}
