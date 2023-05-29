import { render, fireEvent } from '@testing-library/vue'
import { link } from 'fs'
import BaseLink from './BaseLink.vue'

const setup = (options = {}) => {
  return render(BaseLink, {
    ...options,
  })
}

describe('<BaseLink />', () => {
  it('should display a link with a content and correct href', async () => {
    const content = 'Hello world'
    const href = 'https://test.com'

    const wrapper = setup({
      slots: {
        default: content,
      },
      attrs: {
        href,
      },
    })

    const link = wrapper.getByRole('link')

    expect(link).toHaveTextContent(content)
    expect(link).toHaveAttribute('href', href)
  })

  it('should contain an external icon when is external', async () => {
    const content = 'Hello world'
    const href = 'https://test.com'

    const wrapper = setup({
      slots: {
        default: content,
      },
      props: {
        external: true,
      },
      attrs: {
        href,
      },
    })

    const link = wrapper.getByRole('link')

    // Icon has aria-hidden attribute
    const icon = await link.querySelector('[aria-hidden="true"]')
    expect(icon).toBeInTheDocument()
  })

  it('should contain ARIA Label attribute when opens in a new window', async () => {
    const content = 'Hello world'
    const href = 'https://test.com'

    const wrapper = setup({
      slots: {
        default: content,
      },
      props: {
        external: true,
      },
      attrs: {
        href,
        target: '_blank',
      },
    })

    const link = wrapper.getByRole('link')

    expect(link).toHaveAttribute('aria-label', 'Opens in new tab')
  })

  it('should have aria-disabled attribute when disabled', async () => {
    const content = 'Hello world'
    const href = 'https://test.com'

    const wrapper = setup({
      slots: {
        default: content,
      },
      props: {
        disabled: true,
      },
      attrs: {
        href,
      },
    })

    const link = wrapper.getByRole('link')
    expect(link).toHaveAttribute('aria-disabled', 'true')
  })
})
