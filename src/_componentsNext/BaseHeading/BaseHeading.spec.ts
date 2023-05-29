import { vi } from 'vitest'
import { render } from '@testing-library/vue'
import BaseHeading from './BaseHeading.vue'

describe('<BaseHeading />', () => {
  it('should render privoded content', async () => {
    const wrapper = render(BaseHeading, {
      props: {
        type: 'h1',
      },
      slots: {
        default: 'Hello world',
      },
    })

    const heading = await wrapper.getByText('Hello world')

    expect(heading).toBeInstanceOf(HTMLHeadingElement)
    expect(heading).toBeInTheDocument()
  })

  it('should be a correct tag', async () => {
    const wrapper = render(BaseHeading, {
      props: {
        type: 'h3',
      },
      slots: {
        default: 'Hello world',
      },
    })

    const heading = await wrapper.getByRole('heading', { level: 3 })
    expect(heading).toBeInTheDocument()
  })

  it("should throw a warning if type isn't provided", async () => {
    console.warn = vi.fn()

    const wrapper = render(BaseHeading, {
      props: {},
      slots: {
        default: 'Hello world',
      },
    })

    expect(console.warn).toHaveBeenCalledTimes(1)
    expect(wrapper.container).toBeEmptyDOMElement()
  })
})
