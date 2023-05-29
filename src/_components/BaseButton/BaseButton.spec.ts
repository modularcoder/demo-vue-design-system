import { vi } from 'vitest'
import { render } from '@testing-library/vue'
import { BaseButton } from './index'

describe('<BaseButton />', () => {
  it('displays a button', async () => {
    const wrapper = render(BaseButton, {
      slots: {
        default: 'Button label',
      },
    })

    const button = wrapper.getByRole('button')

    expect(button).not.toBeDisabled()

    await button.click()

    // Should emit click event
    expect(wrapper.emitted()['click']).not.toBeUndefined()
  })

  it('displays anchor button', async () => {
    const wrapper = render(BaseButton, {
      props: {
        tag: 'a',
        href: 'https://test.com',
      },
      slots: {
        default: 'External link',
      },
    })

    const button = wrapper.getByRole('button')

    expect(button).toBeInstanceOf(HTMLAnchorElement)
    expect(button.getAttribute('href')).toEqual('https://test.com')
  })

  it('displays disabled', async () => {
    const clickCallback = vi.fn()

    const wrapper = render(BaseButton, {
      props: {
        disabled: true,
        onClick: clickCallback,
      },
      slots: {
        default: 'Disabled button',
      },
    })

    const button = wrapper.getByRole('button')
    expect(button).toBeDisabled()

    await button.click()

    expect(clickCallback).not.toBeCalled()
    expect(wrapper.emitted()['click']).toBeUndefined()
  })

  it('call onClick callback', () => {
    const clickCallback = vi.fn((e) => e)

    const wrapper = render(BaseButton, {
      props: {
        onClick: clickCallback,
      },
      slots: {
        default: 'Clickable button',
      },
    })

    const button = wrapper.getByRole('button')

    button.click()

    expect(clickCallback).toHaveBeenCalledTimes(1)
    expect(clickCallback.mock.calls[0][0]).toBeInstanceOf(MouseEvent)
  })
})
