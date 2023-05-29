import { vi } from 'vitest'
import { render, fireEvent } from '@testing-library/vue'
import { BaseTextarea } from './index'

const setup = (options = {}) => {
  return render(BaseTextarea, {
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

describe('<BaseTextarea />', () => {
  it('should be an empty textarea with placeholder', async () => {
    const wrapper = setup()
    const textarea = wrapper.getByPlaceholderText('Enter value')
    expect(textarea.tagName).toEqual('TEXTAREA')

    expect(textarea).toBeTruthy()
  })

  it('should be a textarea with a given value', async () => {
    const wrapper = setup({
      props: {
        modelValue: 'Hello',
      },
    })
    const textarea = wrapper.getByDisplayValue('Hello') as HTMLTextAreaElement

    expect(textarea).toBeTruthy()
  })

  it('should be disabled textarea with a value', async () => {
    const wrapper = setup({
      attrs: {
        disabled: true,
      },
      props: {
        modelValue: 'Hello',
      },
    })

    const textarea = wrapper.getByDisplayValue('Hello') as HTMLTextAreaElement

    expect(textarea.disabled).toBeTruthy()
    expect(textarea.value).toBe('Hello')
  })

  it('should update the value on user input', async () => {
    const wrapper = setup({
      props: {
        modelValue: 'Hello',
      },
    })
    const textarea = wrapper.getByDisplayValue('Hello') as HTMLTextAreaElement

    await fireEvent.update(textarea, 'Big brow fox jumps')
    expect(textarea.value).toBe('Big brow fox jumps')
  })

  it('should emit onClick event on textarea click', async () => {
    const clickCallback = vi.fn((e) => e)

    const wrapper = setup({
      props: {
        modelValue: 'Hello',
        onClick: clickCallback,
      },
    })
    const textarea = wrapper.getByDisplayValue('Hello') as HTMLTextAreaElement

    textarea.click()

    expect(clickCallback).toHaveBeenCalledTimes(1)
    expect(clickCallback.mock.calls[0][0]).toBeInstanceOf(MouseEvent)
  })

  it('should emit update:modelValue callback on user input', async () => {
    const updateCallback = vi.fn((e) => e)

    const wrapper = setup({
      props: {
        modelValue: 'Hello',
        'onUpdate:modelValue': updateCallback,
      },
    })
    const textarea = wrapper.getByDisplayValue('Hello') as HTMLTextAreaElement

    textarea.click()

    await fireEvent.update(textarea, 'Big brow fox jumps')

    expect(updateCallback).toHaveBeenCalledTimes(1)
    expect(textarea.value).toBe('Big brow fox jumps')
  })
})
