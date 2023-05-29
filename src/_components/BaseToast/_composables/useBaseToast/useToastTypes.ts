import { Component, DefineComponent } from 'vue'

export interface UseToastProps {
  component?: DefineComponent | Component
  duration?: number
  infinite?: boolean
  stackable?: boolean
}
