export enum BASE_SELECT_VARIANT {
  DEFAULT = 'default',
  DANGER = 'danger',
}

export interface BaseSelectProps {
  variant?: `${BASE_SELECT_VARIANT}`
  placeholder?: string
  modelValue?: string
  disabled?: boolean
  options?: {
    id?: string
    name: string
    value: string
  }[]
}
