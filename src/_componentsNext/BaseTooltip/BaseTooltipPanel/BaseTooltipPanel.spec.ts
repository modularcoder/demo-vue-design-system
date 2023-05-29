import { render } from '@testing-library/vue'
import BaseTooltipPanel from './BaseTooltipPanel.vue'

describe('<BaseTooltipPanel />', () => {
  it('should render provided content', async () => {
    const wrapper = render(BaseTooltipPanel, {
      slots: {
        default: '<span>Hello world</span>',
      },
    })

    const element = await wrapper.getByText('Hello world')

    expect(element).toBeInstanceOf(HTMLSpanElement)
    expect(element).toBeInTheDocument()
  })
})
