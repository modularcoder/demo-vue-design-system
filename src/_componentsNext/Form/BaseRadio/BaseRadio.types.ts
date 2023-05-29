export enum BASE_RADIO_VARIANT {
  DEFAULT = 'default',
  DANGER = 'danger',
}

export interface BaseRadioProps {
  variant?: `${BASE_RADIO_VARIANT}`
  modelValue?: string
  nativeValue?: string
  disabled?: boolean
}
