import type React from 'react'

interface Props {
  name: string
  type?: undefined | 'line' | 'fill'
  color?: string
  size?: 'xxs' | 'xs' | 'sm' | '1x' | 'lg' | 'xl' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x'
  bgType?: undefined | 'square' | 'round'
  bgColor?: undefined | string
}

/**
 * @see https://remixicon.com/
 */
export default function Icon({
  name,
  type = undefined,
  color = 'inherit',
  size = '1x',
  bgType = undefined,
  bgColor = undefined
}: Props) {
  let className = `ri-${name}`
  let borderRadius
  let backgroundColor

  if (type) {
    className = `${className}-${type}`
  }
  if (bgType) {
    borderRadius = bgType === 'round' ? '50%' : 10
  }
  if (bgColor) {
    backgroundColor = bgColor
  }

  return (
    <div
      className="aurora-icon"
      style={{
        display: 'inline-block',
        padding: 13,
        borderRadius,
        backgroundColor
    }}>
      <i
        className={`${className} ri-${size}`}
        style={{ color }}
      />
    </div>
  )
}
