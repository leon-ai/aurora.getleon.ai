import type React from 'react'
import {
  SelectOption as ArkSelectOption,
  type SelectOptionProps
} from '@ark-ui/react'

interface Props extends Pick<SelectOptionProps,
  'label' |
  'value' |
  'disabled'
> {}

export function SelectOption({
  label,
  value,
  disabled
}: Props) {
  return (
    <ArkSelectOption
      label={label}
      value={value}
      disabled={disabled}
    />
  )
}
