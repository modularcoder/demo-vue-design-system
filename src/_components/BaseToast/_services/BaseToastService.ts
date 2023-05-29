import { useToast } from '../_composables/useBaseToast'
import BaseToast from '../BaseToast.vue'

const { open: _open } = useToast({
  component: BaseToast,
  duration: 5000,
})

const open = (props: {
  variant: 'info' | 'success' | 'danger' | 'warning'
  message: string
  description?: string
  duration?: number
  actions?: { action: (e: Event) => any; message: string; class?: string }[]
  onCloseClick?: (e: Event) => any
}) => {
  _open({
    duration: props.duration,
    props: {
      variant: props.variant,
      message: props.message,
      description: props.description,
      actions: props.actions,
    },
    emits: {
      close: props.onCloseClick,
    },
  })
}

export default {
  open,
}
