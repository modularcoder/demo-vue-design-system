import { render } from '@testing-library/vue'
import { BaseField } from './index'

describe('<BaseField />', () => {
  it('displays a base field with a no label', async () => {
    const { getByTestId } = render(BaseField, {
      slots: {
        default: 'content',
      },
    })

    const noLabel = getByTestId('field-no-label')

    expect(noLabel).toBeVisible()
    expect(noLabel).toHaveTextContent('content')
  })

  it('displays a base field with a label and hint', async () => {
    const { getByTestId } = render(BaseField, {
      props: {
        label: 'my label',
        labelHint: 'label hint',
      },
      slots: {
        default: 'content',
      },
    })

    const wrapper = getByTestId('field-label-wrapper')
    const label = getByTestId('field-label')
    const hint = getByTestId('field-label-hint')

    expect(wrapper).toBeVisible()
    expect(label).toHaveTextContent('my label')
    expect(hint).toHaveTextContent('label hint')
  })

  it('displays a base field with message and correct variant', async () => {
    const { getByTestId } = render(BaseField, {
      slots: {
        default: 'content',
      },
      props: {
        message: 'my message',
        variant: 'danger',
      },
    })

    const msg = getByTestId('field-msg')

    expect(msg).toBeVisible()
    expect(msg).toHaveClass('twc-text-danger-600')
    expect(msg).toHaveTextContent('my message')
  })
})
