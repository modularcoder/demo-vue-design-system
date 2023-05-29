import { vi } from 'vitest'
import { render, fireEvent } from '@testing-library/vue'
import { BaseInput } from './index'

const setup = (options = {}) => {
  return render(BaseInput, {
    global: {
      provide: {
        fieldVariant: 'default',
      },
    },
    attrs: {
      placeholder: 'Enter value',
    },
    ...options,
  })
}

describe('<BaseInput />', () => {
  it('should be an empty text input with placeholder', async () => {
    const wrapper = setup()
    const input = wrapper.getByPlaceholderText(
      'Enter value',
    ) as HTMLInputElement

    expect(input.type).toBe('text')
    expect(input).toBeTruthy()
  })

  it('should be an input with a value', async () => {
    const clickCallback = vi.fn((e) => e)
    const updateCallback = vi.fn((e) => e)

    const wrapper = setup({
      props: {
        modelValue: 'Hello',
        onClick: clickCallback,
      },
    })
    const input = wrapper.getByDisplayValue('Hello') as HTMLInputElement

    expect(input).toBeTruthy()

    input.click()

    await fireEvent.update(input, '23')

    expect(clickCallback).toHaveBeenCalledTimes(1)
    expect(clickCallback.mock.calls[0][0]).toBeInstanceOf(MouseEvent)
    expect(input.value).toBe('23')
  })

  it('should be disabled input with a value', async () => {
    const wrapper = setup({
      attrs: {},
      props: {
        disabled: true,
        modelValue: 'Hello',
      },
    })

    const input = wrapper.getByDisplayValue('Hello') as HTMLInputElement

    expect(input.disabled).toBeTruthy()
    expect(input.value).toBe('Hello')
  })

  it('should be editable', async () => {
    const wrapper = setup()
    const input = wrapper.getByPlaceholderText(
      'Enter value',
    ) as HTMLInputElement

    fireEvent.update(input, '23')

    expect((input as HTMLInputElement).value).toBe('23')
  })

  it('should be a password input', async () => {
    const wrapper = setup({
      props: {
        type: 'password',
      },
    })

    const input = wrapper.getByPlaceholderText(
      'Enter value',
    ) as HTMLInputElement

    expect(input.type).toBe('password')
  })

  it('should be an eamil input', async () => {
    const wrapper = setup({
      props: {
        type: 'email',
      },
    })

    const input = wrapper.getByPlaceholderText(
      'Enter value',
    ) as HTMLInputElement

    expect(input.type).toBe('email')
  })
})
