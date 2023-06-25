import type React from 'react'
import {
  Toast as ArkToast,
  ToastCloseTrigger,
  ToastDescription,
  ToastGroup,
  ToastPlacements,
  ToastProvider,
  ToastTitle
} from '@ark-ui/react'

import './toast.sass'

interface Props {
  children?: React.ReactNode
}

export function Toast({
  children
}: Props) {
  return (
    <ToastProvider>
      <ToastPlacements>
        {(placements) =>
          placements.map((placement) => (
            <ToastGroup key={placement} placement={placement}>
              {(toasts) =>
                toasts.map((toast) => (
                  <ArkToast key={toast.id} toast={toast}>
                    <ToastTitle />
                    <ToastDescription />
                    <ToastCloseTrigger>Close</ToastCloseTrigger>
                  </ArkToast>
                ))
              }
            </ToastGroup>
          ))
        }
      </ToastPlacements>

      {children}
    </ToastProvider>
  )
}
