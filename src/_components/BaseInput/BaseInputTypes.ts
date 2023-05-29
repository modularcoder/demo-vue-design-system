export interface BaseInputProps {
  modelValue?: string | number
  type?: 'email' | 'text' | 'textarea' | 'number' | 'date' | 'password'
  variant?: 'default' | 'danger' | 'warning' | 'success'
}
