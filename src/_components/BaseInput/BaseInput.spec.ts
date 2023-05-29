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
  it('displays an empty input with placeholder', async () => {
    const wrapper = setup()
    const input = wrapper.getByPlaceholderText('Enter value')

    expect(input).toBeTruthy()
  })

  it('displays an input with value', async () => {
    const clickCallback = vi.fn((e) => e)
    const updateCallback = vi.fn((e) => e)

    const wrapper = setup({
      props: {
        modelValue: 'Hello',
        onClick: clickCallback,
        // onUpdateModelValue: updateCallback, // not working, no idea
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

  it('displays a disabled input with value', async () => {
    const wrapper = setup({
      attrs: {
        disabled: true,
      },
      props: {
        modelValue: 'Hello',
      },
    })

    const input = wrapper.getByDisplayValue('Hello') as HTMLInputElement

    expect(input.disabled).toBeTruthy()
    expect(input.value).toBe('Hello')
  })

  it('types a value', async () => {
    const wrapper = setup()
    const input = wrapper.getByPlaceholderText(
      'Enter value',
    ) as HTMLInputElement

    fireEvent.update(input, '23')

    expect((input as HTMLInputElement).value).toBe('23')
  })

  it('displays a textarea input', async () => {
    const wrapper = setup({
      props: {
        type: 'textarea',
      },
    })

    const textarea = wrapper.getByPlaceholderText('Enter value')

    expect(textarea.tagName).toEqual('TEXTAREA')

    fireEvent.update(textarea, '1234')

    const visibleInput = wrapper.queryByDisplayValue('1234')
    expect(visibleInput).toBeInstanceOf(HTMLTextAreaElement)
  })

  it('displays password input', async () => {
    const wrapper = setup({
      props: {
        type: 'password',
      },
    })

    const input = wrapper.getByPlaceholderText(
      'Enter value',
    ) as HTMLInputElement

    fireEvent.update(input, '1234')

    expect(input.type).toBe('password')
  })
})
