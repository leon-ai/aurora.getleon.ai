import React from 'react'
import classNames from 'classnames'

import type { Color, Size, IconType } from '../../lib/types'

import './icon.sass'

interface Props {
  name?: string
  svg?: React.ReactNode
  type?: IconType
  color?: Color
  size?: Size | 'xxl'
  bgShape?: 'square' | 'circle'
  bgColor?: Color
}

const REMIX_SIZE_MAPPING = {
  xs: 'xs',
  sm: 'sm',
  md: '1x',
  lg: 'lg',
  xl: 'xl',
  xxl: '2x'
}

/**
 * @see https://remixicon.com/
 */
export function Icon({
  name,
  svg,
  type = 'line',
  color,
  size = 'md',
  bgShape,
  bgColor
}: Props) {
  let iconClassName = `ri-${name}`

  if (type) {
    iconClassName = `${iconClassName}-${type}`
  }

  return (
    <div
      className={classNames('aurora-icon', {
        [`aurora-icon--${size}`]: size,
        [`aurora-icon--${bgShape}`]: bgShape,
        [`aurora-icon--bg-${bgColor}`]: bgColor,
        [`aurora-icon--${color}`]: color
      })}
    >
      {svg ? (
        svg
      ) : (
        <i
          className={classNames(iconClassName, {
            [`ri-${REMIX_SIZE_MAPPING[size]}`]: size
          })}
        />
      )}
    </div>
  )
}
