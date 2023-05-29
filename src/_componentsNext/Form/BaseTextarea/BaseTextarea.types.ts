export enum BASE_TEXTAREA_VARIANT {
  DEFAULT = 'default',
  DANGER = 'danger',
}

export interface BaseTextareaProps {
  modelValue?: string
  variant?: `${BASE_TEXTAREA_VARIANT}`
  disabled?: boolean
}
