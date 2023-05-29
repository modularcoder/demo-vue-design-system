export enum BASE_FIELD_VARIANT {
  DEFAULT = 'default',
  DANGER = 'danger',
}

export interface BaseFieldProps {
  label?: string
  labelHint?: string
  variant?: `${BASE_FIELD_VARIANT}`
  message?: string
  required?: boolean
  optional?: boolean
}
