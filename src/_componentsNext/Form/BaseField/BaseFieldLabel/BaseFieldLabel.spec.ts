import { render } from '@testing-library/vue'
import BaseFieldLabel from './BaseFieldLabel.vue'

describe('<BaseFieldLabel />', () => {
  it('should display a label', () => {
    const label = 'hello'

    const wrapper = render(BaseFieldLabel, {
      props: {
        label,
      },
    })

    expect(wrapper.html()).to.contain(label)
  })

  it('should display a label with a hint', () => {
    const label = 'hello'
    const labelHint = 'world'

    const wrapper = render(BaseFieldLabel, {
      props: {
        label,
        labelHint,
      },
    })

    expect(wrapper.html()).to.contain(labelHint)
  })

  it('should display an asterisk when label is required', () => {
    const wrapper = render(BaseFieldLabel, {
      props: {
        label: 'hello',
        required: true,
      },
    })

    expect(wrapper.html()).to.contain('*')
  })

  it('should not display an asterisk when label is not required', () => {
    const wrapper = render(BaseFieldLabel, {
      props: {
        label: 'hello',
      },
    })

    expect(wrapper.html()).not.to.contain('*')
  })
})
