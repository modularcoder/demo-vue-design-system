export enum BASE_INPUT_TYPE {
  TEXT = 'text',
  DATE = 'date',
  EMAIL = 'email',
  NUMBER = 'number',
  PASSWORD = 'password',
}

export enum BASE_INPUT_VARIANT {
  DEFAULT = 'default',
  DANGER = 'danger',
}

export interface BaseInputProps {
  modelValue?: string | number
  type?: `${BASE_INPUT_TYPE}`
  variant?: `${BASE_INPUT_VARIANT}`
  disabled?: boolean
}
