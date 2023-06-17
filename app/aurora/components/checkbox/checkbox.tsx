import React, { useState } from 'react'
import classNames from 'classnames'
import {
  Checkbox as ArkCheckbox,
  CheckboxLabel,
  CheckboxInput,
  CheckboxControl,
  type CheckboxProps
} from '@ark-ui/react'

import './checkbox.sass'

interface Props extends Pick<CheckboxProps,
  'value' |
  'checked' |
  'disabled' |
  'onChange'
> {
  label?: string
}

export function Checkbox({
  label,
  checked,
  value,
  disabled,
  onChange
}: Props) {
  const [isChecked, setIsChecked] = useState(checked)

  return (
    <ArkCheckbox
      className="aurora-checkbox"
      value={value}
      checked={isChecked}
      disabled={disabled}
      onChange={(e) => {
        setIsChecked(e.checked)

        if (onChange) {
          onChange(e)
        }
      }}
    >
      {(state) => (
        <>
          <CheckboxInput className="aurora-checkbox-input" />
          <CheckboxControl className="aurora-checkbox-control">
            {state.isChecked && <span>✓</span>}
            {state.isIndeterminate && <span>-</span>}
          </CheckboxControl>
          <CheckboxLabel className="aurora-checkbox-label">{label}</CheckboxLabel>
        </>
      )}
    </ArkCheckbox>
  )
}
