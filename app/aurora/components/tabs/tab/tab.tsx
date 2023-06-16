import type React from 'react'
import classNames from 'classnames'
import { TabTrigger, type TabTriggerProps } from '@ark-ui/react'

import './tab.sass'

export function Tab(props: TabTriggerProps) {
  return (
    <TabTrigger
      className={classNames('aurora-tab', {
        // TODO
      })}
      value={props.value}
    >
      {props.children}
    </TabTrigger>
  )
}
