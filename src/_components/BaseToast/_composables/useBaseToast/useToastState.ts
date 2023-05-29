import { onBeforeMount, onMounted, Ref, ref } from 'vue'

let parent: Element | null = null

const removeElement = (el: Element) => {
  if (typeof el.remove !== 'undefined') {
    el.remove()
  } else if (typeof el.parentNode !== 'undefined' && el.parentNode !== null) {
    el.parentNode.removeChild(el)
  }
}

interface Options {
  duration: number
  infinite: boolean
  stackable: boolean
}

export const useToastState = (
  el: Ref<Element | null>,
  { duration, infinite, stackable }: Options,
) => {
  const isActive = ref(false)

  const setupContainer = () => {
    // remove the container element if toast is not stackable => this toast will not stack
    if (parent && parent.parentElement && !stackable) {
      removeElement(parent.parentElement)
    }
    // Singleton container
    // keeping container created once
    const container = document.body
    parent =
      document.querySelector(`body>#ui-core-toast`)?.firstElementChild || null
    if (!parent) {
      const wrapper = document.createElement('div')
      wrapper.setAttribute('id', 'ui-core-toast')
      wrapper.classList.add('app-ui-core')
      parent = document.createElement('div')
      parent.setAttribute(
        'class',
        'twc-fixed twc-inset-0 twc-flex twc-flex-col-reverse twc-items-end twc-px-4 twc-py-6 twc-pointer-events-none sm:twc-p-6 tw-z-50',
      )
      wrapper.appendChild(parent)
      container.appendChild(wrapper)
    }
  }

  const startCloseTimer = () => {
    // using delayed close after open
    setTimeout(() => {
      closeNotification()
    }, duration)
  }

  const closeNotification = () => {
    isActive.value = false
    // using delay allowing leave animation
    setTimeout(() => {
      // remove a single notification element
      if (el.value) {
        removeElement(el.value)
      }
      // remove the wrapper div if there is no more notification
      if (parent && parent.parentElement && parent?.children.length === 0) {
        removeElement(parent.parentElement)
      }
    }, 300)
  }

  const showNotification = () => {
    if (!(el.value instanceof Element)) {
      throw new Error(
        `Toast Notification Component should be wrapped in a single element`,
      )
    }
    if (parent) {
      // insert the notification inside the parent element
      if (el.value) parent.insertAdjacentElement('afterbegin', el.value)
    }
    isActive.value = true
    // start closing timer if the toast is not infinite
    if (!infinite) {
      startCloseTimer()
    }
  }

  onBeforeMount(() => {
    setupContainer()
  })

  onMounted(() => {
    showNotification()
  })

  return { isActive, closeNotification }
}
