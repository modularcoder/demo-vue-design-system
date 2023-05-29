import { ref, ComponentPublicInstance, computed } from 'vue'

import {
  Placement,
  useFloating,
  offset,
  flip,
  size,
  autoUpdate,
} from '@floating-ui/vue'

export const positionPlacement = [
  'top',
  'right',
  'bottom',
  'left',
  'top-start',
  'top-end',
  'right-start',
  'right-end',
  'bottom-start',
  'bottom-end',
  'left-start',
  'left-end',
] as const

export const positionBehavior = ['flip', 'resize'] as const

export type PositionPlacement = typeof positionPlacement[number]
export type PositionBehavior = typeof positionBehavior[number]

const flipMiddleware = [offset(5), flip()]
const resizeMiddleware = [
  offset(5),
  size({
    apply({ availableWidth, availableHeight, elements }) {
      // Do things with the data, e.g.
      Object.assign(elements.floating.style, {
        maxHeight: `${availableHeight}px`,
      })
    },
  }),
]
export const usePosition = (
  placement: PositionPlacement,
  behavior: PositionBehavior,
) => {
  const trigger = ref<ComponentPublicInstance<HTMLInputElement> | null>(null)
  const floating = ref<ComponentPublicInstance<HTMLInputElement> | null>(null)
  const place = ref<Placement>(placement)
  const middleware = ref(
    behavior === 'flip' ? flipMiddleware : resizeMiddleware,
  )

  const { x, y, strategy, update } = useFloating(trigger, floating, {
    placement: place,
    strategy: 'fixed',
    middleware: middleware,
    whileElementsMounted: autoUpdate,
  })
  const styles = computed(() => {
    return {
      left: `${x?.value || 0}px`,
      top: `${y?.value || 0}px`,
      position: strategy.value,
    }
  })

  return {
    trigger,
    floating,
    styles,
    strategy,
    update,
  }
}
