import type { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue'

export enum BASE_BUTTON_VARIANT {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  PRIMARY_LINK = 'primary-link',
  DANGER = 'danger',
  DANGER_LINK = 'danger-link',
}

export enum BASE_BUTTON_SIZE {
  XS = 'xs',
  SM = 'sm',
  DEFAULT = 'default',
  LG = 'lg',
  XL = 'xl',
}

export enum BASE_BUTTON_TAG {
  BUTTON = 'button',
  A = 'a',
  ROUTER_LINK = 'router-link',
}

export interface BaseButtonProps {
  variant?: `${BASE_BUTTON_VARIANT}`
  size?: `${BASE_BUTTON_SIZE}`
  disabled?: boolean
  tag?: `${BASE_BUTTON_TAG}`
  href?: string
  iconLeading?: object | FunctionalComponent<HTMLAttributes & VNodeProps>
  iconTrailing?: object | FunctionalComponent<HTMLAttributes & VNodeProps>
}
