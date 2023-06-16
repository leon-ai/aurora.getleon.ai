import type React from 'react'

import './widget-wrapper.sass'

interface Props {
  children: React.ReactNode
}

export function WidgetWrapper({
  children
}: Props) {
  return (
    <div
      className="aurora-widget-wrapper"
    >
      {children}
    </div>
  )
}
