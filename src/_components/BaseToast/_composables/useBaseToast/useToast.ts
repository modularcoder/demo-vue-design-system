import { h, render, DefineComponent, Component } from 'vue'
import ToastContainer from './ToastContainer.vue'
import { UseToastProps } from './useToastTypes'

const defaultParams = {
  duration: 5000,
  infinite: false,
  stackable: true,
}

export const useToast = (props: UseToastProps = {}) => {
  const open = (params: { props: any; emits: any; duration?: number }) => {
    if (!props.component) {
      throw new Error(
        `[useBaseToast] requires a component to be passed in {component: Component}`,
      )
    }
    // create the Toast component
    const vNode = h(ToastContainer, {
      component: props.component,
      props: params.props,
      emits: params.emits,
      duration: params.duration || props.duration || defaultParams.duration,
      infinite: props.infinite || defaultParams.infinite,
      stackable:
        props.stackable !== undefined
          ? props.stackable
          : defaultParams.stackable,
    })

    // render the element
    // this does not attach the element to the node
    // this will trigger lifecycle hooks and onMounted we are attaching the component to the dom then
    render(vNode, document.createElement('div'))
    return vNode.component?.proxy?.$.exposed as { close: () => void }
  }
  return { open }
}
