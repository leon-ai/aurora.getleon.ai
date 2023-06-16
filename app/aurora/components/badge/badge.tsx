import type React from 'react'
import classNames from 'classnames'

import type { IconType } from '../../lib/types'

import './badge.sass'
import Icon from '@/app/aurora/components/icon'
import Flexbox from '@/app/aurora/components/flexbox'

interface Props {
  children: React.ReactNode
  color?: 'blue' | 'green' | 'red' | 'yellow'
  iconName?: string
  iconType?: IconType
}

export default function Badge({
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
