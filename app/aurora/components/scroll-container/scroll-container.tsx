import type React from 'react'

import './scroll-container.sass'

interface Props {
  children: React.ReactNode
}

export function ScrollContainer({
  children
}: Props) {
  return (
    <div
      className="aurora-scroll-container"
    >
      <div className="aurora-scroll-container-scrollview">
        {children}
      </div>
      <div className="aurora-scroll-container-mask" />
    </div>
  )
}
