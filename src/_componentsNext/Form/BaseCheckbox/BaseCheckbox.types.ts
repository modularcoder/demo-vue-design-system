export enum BASE_CHECKBOX_VARIANT {
  DEFAULT = 'default',
  DANGER = 'danger',
}

export interface BaseCheckboxProps {
  modelValue: any[] | boolean
  nativeValue?: any
  variant?: `${BASE_CHECKBOX_VARIANT}`
  disabled?: boolean
  required?: boolean
}
