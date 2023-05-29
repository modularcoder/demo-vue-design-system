import type { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue'

export enum BASE_MENU_ITEM_TAG {
  LI = 'li',
  A = 'a',
  ROUTER_LINK = 'router-link',
}

export interface BaseMenuItemProps {
  id?: string | number
  title?: string
  tag?: `${BASE_MENU_ITEM_TAG}`
  description?: string
  icon?: object | FunctionalComponent<HTMLAttributes & VNodeProps>
  to?: string | Record<string, any>
  href?: string
  disabled?: boolean
}
