export interface BaseToastProps {
  variant?: 'info' | 'success' | 'danger' | 'warning'
  message: string
  description?: string
  actions?: { message: string; action: (e: Event) => any; class?: string }[]
}
