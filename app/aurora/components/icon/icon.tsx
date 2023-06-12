import React from 'react'
import classNames from 'classnames'

import type { Color, Size } from '../../lib/types'

import './icon.sass'

interface Props {
  name?: string
  svg?: React.ReactNode
  type?: 'line' | 'fill'
  color?: Color
  size?: Size
  bgShape?: 'square' | 'circle'
  bgColor?: Color
}

const REMIX_SIZE_MAPPING = {
  xs: 'xs',
  sm: 'sm',
  md: '1x',
  lg: 'lg',
  xl: 'xl'
}

/**
 * @see https://remixicon.com/
 */
export default function Icon({
  name,
  svg,
  type = 'line',
  color,
  size = 'md',
  bgShape,
  bgColor
}: Props) {
  let iconClassName = `ri-${name}`
  let backgroundColor

  if (type) {
    iconClassName = `${iconClassName}-${type}`
  }

  if (bgColor) {
    backgroundColor = bgColor
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
