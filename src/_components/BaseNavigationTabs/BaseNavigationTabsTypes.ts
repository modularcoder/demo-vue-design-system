import { Component } from 'vue'

export interface BaseNavigationTabType {
  name: string
  displayName: string
  badge?: string
  current: boolean
  icon?: Component
}

export interface BaseNavigationTabsProps {
  tabs: BaseNavigationTabType[]
  type?: 'underline' | 'pill'
}
