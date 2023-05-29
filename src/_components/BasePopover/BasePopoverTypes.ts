import { Alignment, Placement } from '@floating-ui/core'

export interface BasePopoverTypes {
  placement?: 'auto' | Placement
  delay?:
    | number
    | {
        show: number
        hide: number
      }
  autoPlacementOptions?: {
    alignment?: Alignment | null
    autoAlignment?: boolean
    allowedPlacements?: Array<Placement>
  }
  variant: 'default' | 'light'
}
