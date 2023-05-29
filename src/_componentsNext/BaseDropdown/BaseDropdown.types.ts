import { PositionPlacement, PositionBehavior } from '@/_composables'

export { positionPlacement, positionBehavior } from '@/_composables'

export interface BaseDropdownProps {
  placement: `${PositionPlacement}`
  behavior: `${PositionBehavior}`
  teleportTarget: string
}
