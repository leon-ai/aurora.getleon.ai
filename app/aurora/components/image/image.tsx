import type React from 'react'
import classNames from 'classnames'

import './image.sass'

interface Props {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  shape?: 'circle' | 'square'
  borderColor?: 'white' | 'blue'
}

export function Image({
  src,
  alt,
  width,
  height,
  shape,
  borderColor
}: Props) {
  return (
    <img
      className={classNames('aurora-image', {
        [`aurora-image--${shape}`]: shape,
        [`aurora-image--${borderColor}-border`]: borderColor
      })}
      style={{
        width,
        height
      }}
      loading="lazy"
      alt={alt}
      src={src}
    />
  )
}
