import { waitFor } from '@testing-library/dom'
import { vi } from 'vitest'
import { render, fireEvent } from '@testing-library/vue'
import ToastContainer from './ToastContainer.vue'
import BaseToast from '../../BaseToast.vue'
import * as consumables from './useToastState'
import { ref, shallowRef } from 'vue'

const getMockComposableReturnValue = (isActive: boolean) => {
  return {
    isActive: ref(isActive),
    closeNotification: vi.fn(),
  }
}

const renderToast = () =>
  render(ToastContainer, {
    props: {
      component: BaseToast,
      props: {},
      emits: {},
      duration: 3000,
      infinite: false,
      stackable: true,
    },
  })

describe('<ToastContainer />', () => {
  it('should call the composable with right parameters', async () => {
    const mockState = getMockComposableReturnValue(false)
    const spy = vi
      .spyOn(consumables, 'useToastState')
      .mockReturnValue(mockState)
    renderToast()

    expect(spy).toHaveBeenCalledWith(shallowRef(null), {
      duration: 3000,
      infinite: false,
      stackable: true,
    })
  })

  it('should render BaseToast component', async () => {
    const mockState = getMockComposableReturnValue(false)
    vi.spyOn(consumables, 'useToastState').mockReturnValue(mockState)
    const { getByTestId } = renderToast()

    await waitFor(() => {
      expect(getByTestId('toast')).toBeInTheDocument()
    })
  })
  it('should call close emit when clicking on close button', async () => {
    const mockState = getMockComposableReturnValue(false)
    vi.spyOn(consumables, 'useToastState').mockReturnValue(mockState)
    const closeMock = vi.fn()
    const { getByTestId } = render(ToastContainer, {
      props: {
        component: BaseToast,
        props: {},
        emits: {
          close: closeMock,
        },
        duration: 3000,
        infinite: false,
        stackable: true,
      },
    })
    await fireEvent.click(getByTestId('toast-close-btn').firstChild as any)

    await waitFor(() => {
      expect(closeMock).toHaveBeenCalled()
    })
  })
})
