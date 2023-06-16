import type React from 'react'
import classNames from 'classnames'
import { TabContent as ArkTabContent, type TabContentProps } from '@ark-ui/react'

import './tab-content.sass'

export function TabContent(props: TabContentProps) {
  return (
    <ArkTabContent
      className={classNames('aurora-tab-content', {
        // TODO
      })}
      value={props.value}
    >
      {props.children}
    </ArkTabContent>
  )
}
