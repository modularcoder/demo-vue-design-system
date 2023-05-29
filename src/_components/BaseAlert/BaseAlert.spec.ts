import { render } from '@testing-library/vue'
import { BaseAlert } from './index'

describe('<BaseAlert />', () => {
  it('displays an alert with text', async () => {
    const wrapper = render(BaseAlert, {
      props: {
        variant: 'success',
      },
      slots: {
        default: 'Alert text',
      },
    })

    const alert = wrapper.getByRole('alert')

    expect(alert).toBeTruthy()
    expect(wrapper.html()).to.contain('Alert text')
  })

  it('displays an alert with text and description', async () => {
    const wrapper = render(BaseAlert, {
      props: {
        variant: 'success',
      },
      slots: {
        default: 'Alert text',
        description: 'Alert description',
      },
    })

    const alert = wrapper.getByRole('alert')
    const description = wrapper.getAllByText('Alert description')

    expect(alert).toBeTruthy()
    expect(description).toHaveLength(1)
  })

  it('displays an alert with action', async () => {
    const wrapper = render(BaseAlert, {
      props: {
        variant: 'success',
      },
      slots: {
        default: 'Alert text',
        action: 'Action slot',
      },
    })

    const alert = wrapper.getByRole('alert')

    expect(alert).toBeTruthy()
    expect(alert.innerHTML).toContain('Action slot')
  })

  it('displays an alert with icon', async () => {
    const wrapper = render(BaseAlert, {
      props: {
        variant: 'success',
      },
      slots: {
        default: 'Alert text',
        icon: 'Icon',
      },
    })

    const alert = wrapper.getByRole('alert')

    expect(alert).toBeTruthy()
    expect(alert.innerHTML).toContain('Icon')
  })
})
