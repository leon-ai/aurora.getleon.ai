import React, { useState } from 'react'
import {
  Slider as ArkSlider,
  SliderControl,
  SliderRange,
  SliderThumb,
  SliderTrack,
  type SliderProps
} from '@ark-ui/react'

import './slider.sass'

interface Props extends Pick<SliderProps,
  'value' |
  'defaultValue' |
  'max' |
  'min' |
  'step' |
  'orientation' |
  'onChange'
> {
  width?: number | string
  height?: number | string
}

export function Slider({
  width,
  height,
  value,
  defaultValue,
  max = 100,
  min = 0,
  step = 1,
  orientation = 'horizontal',
  onChange
}: Props) {
  const [newValue, setNewValue] = useState(value)
  const valueInPercent = Number((((Number(newValue) - min) / (max - min))).toFixed(2)) * 100

  return (
    <div
      className="aurora-slider-container"
      style={{
        width,
        height
      }}
    >
      <ArkSlider
        className="aurora-slider"
        value={newValue}
        defaultValue={defaultValue}
        max={max}
        min={min}
        step={step}
        orientation={orientation}
        onChange={(details) => {
          setNewValue(details.value)

          onChange?.(details)
        }}
      >
        <SliderControl className="aurora-slider-control">
          <SliderTrack className="aurora-slider-track">
            <SliderRange
              className="aurora-slider-range"
              style={{
                [orientation === 'horizontal' ? 'width' : 'height']: `${valueInPercent}%`
              }}
            />
          </SliderTrack>
          <SliderThumb className="aurora-slider-thumb" />
        </SliderControl>
      </ArkSlider>
    </div>
  )
}
