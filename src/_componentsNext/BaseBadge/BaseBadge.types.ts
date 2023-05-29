export enum BASE_BADGE_VARIANT {
  DEFAULT = 'default',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  INFO = 'info',
}

export enum BASE_BADGE_SIZE {
  DEFAULT = 'default',
  LG = 'lg',
}

export interface BaseBadgeProps {
  variant?: `${BASE_BADGE_VARIANT}`
  size?: `${BASE_BADGE_SIZE}`
}
