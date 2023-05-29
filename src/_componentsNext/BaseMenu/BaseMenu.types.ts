import { Ref } from 'vue'

export interface BaseMenuItemAPI {
  el: Ref<HTMLElement | null>
  active: Ref<boolean>
  disabled: Ref<boolean | undefined>
}

export interface BaseMenuAPI {
  items: BaseMenuItemAPI[]
}
