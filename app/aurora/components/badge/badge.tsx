import type React from 'react'
import classNames from 'classnames'

import type { IconType } from '../../lib/types'
import { Icon, Flexbox } from '../index'

import './badge.sass'

interface Props {
  children: React.ReactNode
  color?: 'blue' | 'green' | 'red' | 'yellow'
  iconName?: string
  iconType?: IconType
}

export function Badge({
  children,
  color,
  iconName,
  iconType = 'line'
}: Props) {
  return (
    <div
      className={classNames('aurora-badge', {
        [`aurora-badge--${color}`]: color
      })}
    >
      {iconName ? (
        <Flexbox alignItems="center" justifyContent="center" gap="xs">
          <Icon name={iconName} type={iconType} size="sm" />
          <i>{children}</i>
        </Flexbox>
      ) : (
        children
      )}
    </div>
  )
}
