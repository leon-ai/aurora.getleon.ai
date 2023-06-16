import type React from 'react'
import classNames from 'classnames'
import { TabList as ArkTabList, type TabListProps } from '@ark-ui/react'

import './tab-list.sass'

export function TabList(props: TabListProps) {
  return (
    <ArkTabList
      className={classNames('aurora-tab-list', {
        // TODO
      })}
    >
      {props.children}
    </ArkTabList>
  )
}
