import type React from 'react'
import classNames from 'classnames'

import './flexbox.sass'

interface Props {
  children: React.ReactNode
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch'
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch'
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  gap?: 'xs' | 'md' | 'xl'
  rowGap?: 'xs' | 'md' | 'xl'
  columnGap?: 'xs' | 'md' | 'xl'
}

export function Flexbox({
  children,
  alignItems,
  justifyContent,
  flexDirection,
  gap,
  rowGap,
  columnGap
}: Props) {
  return (
    <div
      className={classNames('aurora-flexbox', {
        [`aurora-flexbox--align-${alignItems}`]: alignItems,
        [`aurora-flexbox--justify-${justifyContent}`]: justifyContent,
        [`aurora-flexbox--${flexDirection}`]: flexDirection,
        [`aurora-flexbox--gap-${gap}`]: gap,
        [`aurora-flexbox--row-gap-${rowGap}`]: rowGap,
        [`aurora-flexbox--column-gap-${columnGap}`]: columnGap
      })}
    >
      {children}
    </div>
  )
}
