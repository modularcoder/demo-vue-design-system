import { Side, Placement, Alignment } from '@floating-ui/vue'

// Placement

export enum BASE_TOOLTIP_PLACEMENT {
  TOP = 'top',
  LEFT = 'left',
  RIGHT = 'right',
  BOTTOM = 'bottom',
}

export interface BaseTooltipProps {
  isOpen?: boolean
  placement?: `${BASE_TOOLTIP_PLACEMENT}`
  label?: string
  delay?:
    | number
    | {
        show: number
        hide: number
      }
}
