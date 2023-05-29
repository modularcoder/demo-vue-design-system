import { render } from '@testing-library/vue'
import BaseDescriptionListItem from './BaseDescriptionListItem.vue'

const setup = (options = {}) => {
  return render(BaseDescriptionListItem, {
    ...options,
  })
}

describe('<BaseDescriptionListItem />', () => {
  it('should display a description list with label and content', async () => {
    const label = 'Label'
    const content = 'Hello world'

    const wrapper = setup({
      slots: {
        default: content,
      },
      props: {
        label,
      },
    })

    const contentEl = wrapper.getByText(content)
    const labelEl = wrapper.getByText(label)

    expect(contentEl).toBeInTheDocument()
    expect(labelEl).toBeInTheDocument()
  })

  it('should display a description list with label slot and content', async () => {
    const label = 'Label'
    const labelSlotContent = 'Other content'
    const content = 'Hello world'

    const wrapper = setup({
      slots: {
        default: content,
        Label: labelSlotContent,
      },
      props: {
        label,
      },
    })

    const contentEl = wrapper.getByText(content)
    const labelEl = wrapper.getByText(labelSlotContent)
    const labelElProp = wrapper.queryByText(label)

    expect(contentEl).toBeInTheDocument()
    expect(labelEl).toBeInTheDocument()
    expect(labelElProp).toBeNull()
  })
})
