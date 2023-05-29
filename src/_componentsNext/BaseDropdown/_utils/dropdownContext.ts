import { inject, InjectionKey } from 'vue'
import { DropdownApi } from '../BaseDropdown.vue'

export const DropdownContext = Symbol(
  'DropdownContext',
) as InjectionKey<DropdownApi>

export function useDropdownContext(component: string) {
  const context = inject(DropdownContext, null)

  if (context === null) {
    const err = new Error(
      `<${component} /> is missing a parent <BaseDropdown /> component.`,
    )
    if (Error.captureStackTrace)
      Error.captureStackTrace(err, useDropdownContext)
    throw err
  }

  return context as DropdownApi
}
