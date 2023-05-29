import { render, fireEvent } from '@testing-library/vue'
import { BaseRadio } from './index'

describe('<BaseRadio />', () => {
  it('should show a radio input with correct label', async () => {
    const wrapper = render(BaseRadio, {
      slots: {
        default: 'Radio label',
      },
    })

    const radio = wrapper.getByRole('radio')

    expect(radio).toBeTruthy()
    expect(wrapper.html()).to.contain('Radio label')
  })

  it('should be disabled radio input with a label', async () => {
    const wrapper = render(BaseRadio, {
      slots: {
        default: 'Radio label',
      },
      props: {
        disabled: true,
      },
    })

    const radio = wrapper.getByRole('radio')

    expect(radio).toBeTruthy()
    expect(wrapper.html()).to.contain('Radio label')
  })

  it('should be checked when the modelValue and nativeValue equal', async () => {
    const wrapper = render(BaseRadio, {
      slots: {
        default: 'Radio label',
      },
      props: {
        modelValue: 'My value',
        nativeValue: 'My value',
      },
    })

    const radio = wrapper.getByRole('radio') as HTMLInputElement

    expect(radio).toBeChecked()
  })

  it('should be checked when the modelValue and nativeValue equal and are object', async () => {
    const val = {
      hello: 'world',
    }

    const wrapper = render(BaseRadio, {
      slots: {
        default: 'Radio label',
      },
      props: {
        modelValue: val,
        nativeValue: val,
      },
    })

    const radio = wrapper.getByRole('radio') as HTMLInputElement

    expect(radio).toBeChecked()
  })

  it('should emit value when clicked', async () => {
    const wrapper = render(BaseRadio, {
      slots: {
        default: 'Radio label',
      },
      props: {
        modelValue: '',
        nativeValue: 'My value',
      },
    })

    const radio = wrapper.getByRole('radio') as HTMLInputElement

    fireEvent.click(radio)

    expect(wrapper.emitted()).toBeTruthy()
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['My value'])
  })

  it('should emits object value when clicked', async () => {
    const val = {
      hello: 'world',
    }

    const wrapper = render(BaseRadio, {
      slots: {
        default: 'Radio label',
      },
      props: {
        modelValue: undefined,
        nativeValue: val,
      },
    })

    const radio = wrapper.getByRole('radio') as HTMLInputElement

    fireEvent.click(radio)

    expect(wrapper.emitted()).toBeTruthy()
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([val])
  })
})
