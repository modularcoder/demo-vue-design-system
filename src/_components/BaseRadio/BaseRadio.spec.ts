import { render, fireEvent } from '@testing-library/vue'
import { BaseRadio } from './index'

describe('<BaseRadio />', () => {
  it('displays a radio input with a label', async () => {
    const wrapper = render(BaseRadio, {
      slots: {
        default: 'Radio label',
      },
    })

    const radio = wrapper.getByRole('radio')

    expect(radio).toBeTruthy()
    expect(wrapper.html()).to.contain('Radio label')
  })

  it('emits value when selected', async () => {
    const wrapper = render(BaseRadio, {
      slots: {
        default: 'Radio label',
      },
      props: {
        modelValue: '',
        nativeValue: 'My value',
      },
    })

    const radio = wrapper.getByRole('radio') as HTMLElement

    fireEvent.update(radio)

    expect(wrapper.emitted()).toBeTruthy()
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['My value'])
  })

  it('is populated by the v-model', async () => {
    const wrapper = render(BaseRadio, {
      slots: {
        default: 'Radio label',
      },
      props: {
        modelValue: 'My value',
        nativeValue: 'My value',
      },
    })

    const radio = wrapper.getByRole('radio') as HTMLElement

    expect(radio).toBeChecked()
  })
})
