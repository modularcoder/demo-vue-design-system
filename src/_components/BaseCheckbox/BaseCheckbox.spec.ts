import { render, fireEvent } from '@testing-library/vue'
import { BaseCheckbox } from './index'

describe('<BaseCheckbox />', () => {
  it('displays a checkbox with correct label', async () => {
    const label = 'My label'
    const wrapper = render(BaseCheckbox, {
      slots: {
        default: label,
      },
    })

    expect(wrapper.html()).to.contain(label)
  })

  it('has correct variant styles', async () => {
    const wrapper = render(BaseCheckbox, {
      slots: {
        default: 'My label',
      },
      props: {
        modelValue: '',
        variant: 'danger',
      },
    })

    const checkbox = wrapper.getByRole('checkbox')

    expect(checkbox).toHaveClass(
      'focus:twc-ring-danger-500 twc-text-danger-600 twc-border-danger-300',
    )
  })

  it('is changes the value and emits', async () => {
    const wrapper = render(BaseCheckbox, {
      slots: {
        default: 'My label',
      },
      props: {
        modelValue: false,
        variant: '',
      },
    })

    const checkbox = wrapper.getByRole('checkbox')

    await fireEvent.update(checkbox)

    expect(wrapper.emitted()).toBeTruthy()
    expect(checkbox).toBeChecked()
  })
})
