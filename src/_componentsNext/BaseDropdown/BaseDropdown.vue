<script lang="ts">
  import {
    PropType,
    provide,
    Ref,
    ref,
    ComputedRef,
    ComponentPublicInstance,
    nextTick,
    useSlots,
    defineEmits,
    SetupContext,
  } from 'vue'
  import { usePosition } from '@/_composables'
  import { BaseDropdownProps } from './BaseDropdown.types'
  import { dom, DropdownContext } from './_utils'

  export interface DropdownApi {
    isOpen: Ref<boolean>
    triggerRef: Ref<ComponentPublicInstance<HTMLElement> | null>
    panelRef: Ref<ComponentPublicInstance<HTMLElement> | null>
    styles: ComputedRef<{
      left: string
      top: string
      position: string
    }>
    openDropdown: () => void
    closeDropdown: () => void
    teleportTarget: string
  }

  export default {
    name: 'BaseDropdown',
    props: {
      placement: {
        type: String as PropType<BaseDropdownProps['placement']>,
        required: false,
        default: 'bottom-start',
      },
      behavior: {
        type: String as PropType<BaseDropdownProps['behavior']>,
        required: false,
        default: 'flip',
      },
      teleportTarget: {
        type: String as PropType<BaseDropdownProps['teleportTarget']>,
        required: false,
        default: '.app-ui-core',
      },
    },
    emits: ['change'],
    setup(props: BaseDropdownProps, { emit }: SetupContext | any) {
      const slots = useSlots()
      let isOpen = ref<DropdownApi['isOpen']['value']>(false)
      const { trigger, floating, styles } = usePosition(
        props.placement,
        props.behavior,
      )
      const openDropdown = () => {
        isOpen.value = true
        nextTick(() => {
          dom(floating)?.focus({ preventScroll: true })
        })
        emit('change', true)
      }

      const closeDropdown = () => {
        isOpen.value = false
        nextTick(() => {
          dom(trigger)?.focus({ preventScroll: true })
        })
        emit('change', false)
      }

      const api: DropdownApi = {
        isOpen,
        triggerRef: trigger,
        panelRef: floating,
        openDropdown,
        closeDropdown,
        styles,
        teleportTarget: props.teleportTarget,
      }

      provide(DropdownContext, api)

      return () => {
        let slot = { isOpen: isOpen.value, close: api.closeDropdown }
        let children = slots.default?.(slot)

        return children
      }
    },
  }
</script>
