export interface NavigationStep {
  id: string | number
  name: string
  description?: string
  isDisabled: boolean
  isVisible: boolean
  isActive?: boolean
  isCompleted?: boolean
  onClick?: (...args: any) => void
}

export interface BaseNavigationStepsProps {
  steps: NavigationStep[]
}
