import { vi } from 'vitest'
import { render } from '@testing-library/vue'
import BaseTooltip from './BaseTooltip.vue'

beforeEach(() => {
  // create teleport target
  const containerEl = document.createElement('div')
  containerEl.setAttribute('class', 'app-ui-core')
  document.body.appendChild(containerEl)
})

afterEach(() => {
  // clean up
  document.body.outerHTML = ''
})

describe('<BaseTooltip />', () => {
  it('should render provided content', async () => {
    const wrapper = render(BaseTooltip, {
      container: document.querySelector('.app-ui-core') as Element,
      slots: {
        default: '<span>Trigger element</span>',
      },
    })

    const trigger = await wrapper.getByText('Trigger element')

    expect(trigger).toBeInstanceOf(HTMLSpanElement)
    expect(trigger).toBeInTheDocument()
  })

  it('should render a tooltip content when explicitly set to isOpen', async () => {
    const wrapper = render(BaseTooltip, {
      container: document.querySelector('.app-ui-core') as Element,
      slots: {
        default: '<span>Trigger element</span>',
      },
      props: {
        isOpen: true,
        label: 'Hello world',
      },
    })

    const tooltipContent = await wrapper.getByText('Hello world')

    expect(tooltipContent).toBeInTheDocument()
  })
})
