import type React from 'react'
import classNames from 'classnames'

import { Flexbox, Icon, Loader } from '..'

import './button.sass'

interface Props {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  iconName?: string
  iconPosition?: 'left' | 'right'
  secondary?: boolean
  danger?: boolean
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
}

export function Button({
  children,
  type = 'button',
  iconName,
  iconPosition = 'left',
  secondary,
  danger,
  disabled,
  loading,
  onClick
}: Props) {
  return (
    <button
      type={type}
      className={classNames('aurora-button', {
        'aurora-button--secondary': secondary,
        'aurora-button--danger': danger,
        'aurora-button--disabled': disabled,
        'aurora-button--loading': loading
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {loading ? <Loader /> : (
        <>
          {iconName && iconPosition === 'left' && (
            <Flexbox flexDirection="row" justifyContent="center" alignItems="center" gap="md">
              <Icon name={iconName} type="line" />
              {children}
            </Flexbox>
          )}
          {iconName && iconPosition === 'right' && (
            <Flexbox flexDirection="row" justifyContent="center" alignItems="center" gap="md">
              {children}
              <Icon name={iconName} type="line" />
            </Flexbox>
          )}
          {!iconName && children}
        </>
      )}
    </button>
  )
}
