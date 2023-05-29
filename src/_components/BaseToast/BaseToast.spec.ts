import { waitFor, within } from '@testing-library/dom'
import { vi } from 'vitest'
import { render, fireEvent } from '@testing-library/vue'
import { BaseToast } from './index'

describe('<BaseToast />', () => {
  it('displays a toast notification with message and correct variant', async () => {
    const { getByTestId } = render(BaseToast, {
      props: {
        message: 'msg text',
        variant: 'danger',
      },
    })

    const toast = getByTestId('toast')
    const icon = getByTestId('toast-icon')
    const msg = getByTestId('toast-msg')

    expect(toast).toHaveClass('twc-bg-danger-50')
    expect(icon).toHaveClass('twc-text-danger-600')
    expect(msg).toHaveClass('twc-text-danger-700')
    expect(msg).toHaveTextContent('msg text')
  })

  it('displays a toast notification with description & action', async () => {
    const mockFn = vi.fn()

    const { getByTestId } = render(BaseToast, {
      props: {
        description: 'description text',
        actions: [{ message: 'act 1', action: mockFn, class: 'act class' }],
      },
    })

    const desc = getByTestId('toast-desc')
    const actions = getByTestId('toast-actions')
    const action = getByTestId('toast-action')

    expect(desc).toHaveTextContent('description text')
    expect(actions).toBeVisible()
    expect(action).toHaveTextContent('act 1')
    expect(action).toHaveClass('act class')

    await fireEvent.click(action)
    expect(mockFn).toHaveBeenCalled()
  })

  it('emit close when pressing X button', async () => {
    const wrapper = render(BaseToast, {})

    const closeWrapper = wrapper.getByTestId('toast-close-btn')

    await fireEvent.click(closeWrapper.firstChild as any)

    expect(wrapper.emitted().close).toBeTruthy()
  })
})
