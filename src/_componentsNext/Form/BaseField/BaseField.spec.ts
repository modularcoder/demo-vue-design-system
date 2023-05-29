import { render } from '@testing-library/vue'
import BaseField from './BaseField.vue'
import BaseInput from '../BaseInput/BaseInput.vue'

describe('<BaseField />', () => {
  it('should display a content wrapped with a label', () => {
    const wrapper = render(BaseField, {
      props: {},
      slots: {
        default: 'content',
      },
    })

    expect(wrapper.html()).to.contain('content')
  })

  it('should display a label', () => {
    const wrapper = render(BaseField, {
      props: {
        label: 'hello',
      },
      slots: {
        default: 'content',
      },
    })

    const label = wrapper.getByText('hello')

    expect(label).toBeInTheDocument()
  })

  it('should display a label hint', () => {
    const wrapper = render(BaseField, {
      props: {
        label: 'hello',
        labelHint: 'world',
      },
      slots: {
        default: 'content',
      },
    })

    const labelHint = wrapper.getByText('world')

    expect(labelHint).toBeInTheDocument()
  })

  it('should display an asterisk when required', () => {
    const wrapper = render(BaseField, {
      props: {
        label: 'hello',
        required: true,
      },
      slots: {
        default: 'content',
      },
    })

    const labelHint = wrapper.getByText('*')

    expect(labelHint).toBeInTheDocument()
  })

  it('should display a message', () => {
    const wrapper = render(BaseField, {
      props: {
        label: 'hello',
        required: true,
        message: 'This is a field message',
      },
      slots: {
        default: 'content',
      },
    })
    const message = wrapper.getByText('This is a field message')

    expect(message).toBeInTheDocument()
  })

  it('should display a label slot', () => {
    const wrapper = render(BaseField, {
      props: {},
      slots: {
        Label: {
          template: `
            Custom content <a>Link</a>
          `,
        },
        default: 'content',
      },
    })

    const label = wrapper.getByText('Custom content')
    const labelLinks = label.getElementsByTagName('a')

    expect(label).toBeInTheDocument()
    expect(labelLinks).toHaveLength(1)
  })

  it('should display a message slot', () => {
    const wrapper = render(BaseField, {
      props: {},
      slots: {
        Message: {
          template: `
            Custom message <a>Link</a>
          `,
        },
        default: 'content',
      },
    })

    const message = wrapper.getByText('Custom message')
    const messageLinks = message.getElementsByTagName('a')

    expect(message).toBeInTheDocument()
    expect(messageLinks).toHaveLength(1)
  })
})
