import React from 'react'
import classNames from 'classnames'

import { type Size } from '../../lib/types'

import './progress.sass'

interface Props {
  value: number
  orientation?: 'horizontal' | 'vertical'
  size?: Size
}

export function Progress({
  value,
  orientation,
  size
}: Props) {
  return (
    <div className={classNames('aurora-progress', {
      [`aurora-progress--${orientation}`]: orientation,
      [`aurora-progress--${size}`]: size
    })}>
      <div className="aurora-progress-value" style={{ width: `${value}%` }} />
    </div>
  )
}
