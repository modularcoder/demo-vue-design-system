import { render } from '@testing-library/vue'
import BaseDescriptionList from './BaseDescriptionList.vue'

const setup = (options = {}) => {
  return render(BaseDescriptionList, {
    ...options,
  })
}

describe('<BaseDescriptionList />', () => {
  it('should display a provided content', async () => {
    const content = 'Hello world'

    const wrapper = setup({
      slots: {
        default: content,
      },
    })

    const list = wrapper.getByText(content)

    expect(list).toBeInTheDocument()
  })
})
