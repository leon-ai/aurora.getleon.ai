import React, { useState } from 'react'
import classNames from 'classnames'

import { Text } from '../text'

import './text-input.sass'

interface Props {
  placeholder: string
  value?: string
  type?: 'text' | 'password' | 'email' | 'tel' | 'url'
  iconName?: string
  hint?: string
  disabled?: boolean
  maxLength?: number
  onChange?: (value: string) => void
}

export function TextInput({
  placeholder,
  type = 'text',
  iconName,
  hint,
  value,
  disabled,
  maxLength = 64,
  onChange
}: Props) {
  const [inputValue, setInputValue] = useState(value || '')

  return (
    <div className="aurora-text-input-container">
      <input
        type={type}
        placeholder={placeholder}
        value={inputValue}
        disabled={disabled}
        maxLength={maxLength}
        onChange={(e) => {
          setInputValue(e.target.value)

          if (onChange) {
            onChange(e.target.value)
          }
        }}
        className={classNames('aurora-text-input', {
          'aurora-text-input--disabled': disabled
        })}
      />
      {hint && (
        <div className="aurora-text-input-hint-container">
          <Text fontSize="xs" tertiary>{hint}</Text>
        </div>
      )}
    </div>
  )
}
