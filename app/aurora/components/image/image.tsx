import type React from 'react'
import classNames from 'classnames'

import './image.sass'

interface Props {
  src: string
  width?: number | string
  height?: number | string
  shape?: 'circle' | 'square'
  borderColor?: 'white' | 'blue'
  backgroundSize?: 'cover' | 'contain'
}

export function Image({
  src,
  width,
  height,
  shape,
  borderColor,
  backgroundSize
}: Props) {
  return (
    <div
      className={classNames('aurora-image', {
        [`aurora-image--${shape}`]: shape,
        [`aurora-image--${borderColor}-border`]: borderColor,
        [`aurora-image--${backgroundSize}`]: backgroundSize
      })}
      style={{
        width,
        height,
        backgroundImage: `url(${src})`
      }}
    />
  )
}
