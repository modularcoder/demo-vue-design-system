import { render, fireEvent } from '@testing-library/vue'
import { BaseCheckbox } from './index'

describe('<BaseCheckbox/>', () => {
  it('should displays a checkbox with correct label', async () => {
    const label = 'My label'
    const wrapper = render(BaseCheckbox, {
      slots: {
        default: label,
      },
    })

    expect(wrapper.html()).to.contain(label)
  })

  it('should be unchecked by default', () => {
    const label = 'My label'
    const wrapper = render(BaseCheckbox, {
      slots: {
        default: label,
      },
    })

    const checkbox = wrapper.getByRole('checkbox') as HTMLInputElement
    expect(checkbox).not.toBeChecked()
  })

  it('should be disabled', async () => {
    const wrapper = render(BaseCheckbox, {
      slots: {},
      props: {
        disabled: true,
      },
    })

    const checkbox = wrapper.getByRole('checkbox')

    expect(checkbox).toBeDisabled()
  })

  it('should be checked if modelValue is true', () => {
    const label = 'My label'
    const wrapper = render(BaseCheckbox, {
      slots: {
        default: label,
      },
      props: {
        modelValue: true,
      },
    })

    const checkbox = wrapper.getByRole('checkbox') as HTMLInputElement
    expect(checkbox).toBeChecked()
  })

  it('should changes the value and emit boolean', async () => {
    const wrapper = render(BaseCheckbox, {
      slots: {
        default: 'My label',
      },
      props: {
        modelValue: false,
      },
    })

    const checkbox = wrapper.getByRole('checkbox')

    await fireEvent.update(checkbox)

    expect(wrapper.emitted()).toBeTruthy()
    expect(checkbox).toBeChecked()
  })

  it("should be checked when it's value is inside array modelValue", async () => {
    const wrapper = render(BaseCheckbox, {
      slots: {
        default: 'My label',
      },
      props: {
        nativeValue: 'Hello',
        modelValue: ['Hello'],
      },
    })

    const checkbox = wrapper.getByRole('checkbox') as HTMLInputElement
    expect(checkbox.value).toBe('Hello')
    expect(checkbox).toBeChecked()
  })

  it('should be checked when the object value is inside array modelValue', async () => {
    const nativeValue = { Hello: 'World' }

    const wrapper = render(BaseCheckbox, {
      props: {
        nativeValue,
        modelValue: [{ Hello: 'World' }],
      },
    })

    const checkbox = wrapper.getByRole('checkbox') as HTMLInputElement
    expect(checkbox).toBeChecked()
  })

  it('should emit array with value when modelValue is an array', async () => {
    const updateCallback = vi.fn((e) => e)

    const wrapper = render(BaseCheckbox, {
      slots: {
        default: 'My label',
      },
      props: {
        modelValue: [],
        nativeValue: 'Hello',
        'onUpdate:modelValue': updateCallback,
      },
    })

    const checkbox = wrapper.getByRole('checkbox') as HTMLInputElement
    expect(checkbox.value).toBe('Hello')

    await fireEvent.click(checkbox)

    expect(updateCallback).toHaveBeenCalledTimes(1)
    expect(updateCallback).toHaveBeenCalledWith(['Hello'])
  })

  it('should emit a correct modelValue array on uncheck', async () => {
    const updateCallback = vi.fn((e) => e)

    const wrapper = render(BaseCheckbox, {
      props: {
        modelValue: ['World', 'Hello'],
        nativeValue: 'Hello',
        'onUpdate:modelValue': updateCallback,
      },
    })

    const checkbox = wrapper.getByRole('checkbox') as HTMLInputElement

    await fireEvent.click(checkbox)

    expect(updateCallback).toHaveBeenCalledTimes(1)
    expect(updateCallback).toHaveBeenCalledWith(['World'])

    expect(checkbox).not.toBeChecked()
  })
})
