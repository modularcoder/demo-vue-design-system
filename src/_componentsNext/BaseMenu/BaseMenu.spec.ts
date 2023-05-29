import { render } from '@testing-library/vue'
import BaseMenu from './BaseMenu.vue'

const setup = (options = {}) => {
  return render(BaseMenu, {
    ...options,
  })
}

describe('<BaseMenu />', () => {
  it('should display provided slot content', async () => {
    const content = 'Hello world'

    const wrapper = setup({
      slots: {
        default: content,
      },
    })

    const menu = wrapper.getByText(content)

    expect(menu).toBeInTheDocument()
  })
})
