export interface BaseButtonProps {
  variant?: 'default' | 'primary' | 'info' | 'danger' | 'warning' | 'success'
  size?: 'xs' | 'sm' | 'default' | 'lg' | 'xl'
  disabled?: boolean
  inverted?: boolean
  tag?: 'button' | 'a' | 'router-link'
  href?: string
}
