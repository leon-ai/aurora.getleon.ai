import type React from 'react'
import classNames from 'classnames'
import { Tabs, type TabsProps } from '@ark-ui/react'

import './tab-group.sass'

export function TabGroup(props: TabsProps) {
  return (
    <Tabs
      className={classNames('aurora-tab-group', {
        // TODO
      })}
      defaultValue={props.defaultValue}
    >
      {props.children}
    </Tabs>
  )
}
