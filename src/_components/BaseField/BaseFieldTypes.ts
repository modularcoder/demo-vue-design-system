import { Ref } from 'vue'

export interface BaseFieldProps {
  label?: string | Ref<string>
  labelFor?: string
  labelHint?: string | Ref<string>
  variant?: 'default' | 'danger' | 'warning' | 'success'
  message?: string | Ref<string>
  required?: boolean | Ref<boolean>
}
