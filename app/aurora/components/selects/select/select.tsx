import type React from 'react'
import {
  Select as ArkSelect,
  SelectContent,
  SelectPositioner,
  SelectTrigger,
  Portal,
  type SelectProps
} from '@ark-ui/react'

import { Flexbox, Icon } from '../..'

import './select.sass'

interface Props extends Pick<SelectProps,
  'defaultValue' |
  'selectedOption' |
  'disabled' |
  'onChange'
> {
  placeholder: string
  children: React.ReactNode
}

export function Select({
  placeholder,
  children,
  selectedOption,
  defaultValue,
  disabled,
  onChange
}: Props) {
  return (
    <ArkSelect
      closeOnSelect
      selectedOption={selectedOption}
      defaultValue={defaultValue}
      disabled={disabled}
      onChange={onChange}
    >
      {({ selectedOption }) => (
        <>
          <SelectTrigger className="aurora-select-trigger">
            <Flexbox flexDirection="row" alignItems="center" justifyContent="space-between">
              <div className="aurora-select-trigger-placeholder-container">
                {placeholder}
              </div>
              <div className="aurora-select-trigger-icon-container">
                <Icon name="arrow-down-s" />
              </div>
            </Flexbox>
          </SelectTrigger>
          <Portal>
            <SelectPositioner>
              <SelectContent>
                {children}
              </SelectContent>
            </SelectPositioner>
          </Portal>
        </>
      )}
    </ArkSelect>
  )
}
