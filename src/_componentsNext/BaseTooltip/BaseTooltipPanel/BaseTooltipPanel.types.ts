export enum BASE_TOOLTIP_CONTENT_DIRECTION {
  TOP = 'top',
  LEFT = 'left',
  RIGHT = 'right',
  BOTTOM = 'bottom',
}

export interface BaseTooltipPanelProps {
  direction?: `${BASE_TOOLTIP_CONTENT_DIRECTION}`
  arrowSize: number
  arrowStyle?: any
}
