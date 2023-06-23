import type React from 'react'
import classNames from 'classnames'

import './widget-wrapper.sass'

interface Props {
  children: React.ReactNode
  noPadding?: boolean
}

export function WidgetWrapper({
  children,
  noPadding
}: Props) {
  return (
    <div
      className={classNames('aurora-widget-wrapper', {
        'aurora-widget-wrapper--no-padding': noPadding
      })}
    >
      {children}
    </div>
  )
}
