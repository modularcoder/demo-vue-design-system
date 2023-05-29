import { vi } from 'vitest'
import { Component, defineComponent } from 'vue'
import { render, RenderOptions, fireEvent } from '@testing-library/vue'
import { COUNTRY_LIST } from '@/_statics/counties'
import { BaseSelect, BaseSelectOption } from './index'

const CONTENT_PLACEHOLDER = 'Select country'
const CONTENT_OPTIONS = COUNTRY_LIST.map((item) => ({
  name: item,
  value: item,
}))

const BaseSelectWithSlot = defineComponent({
  components: {
    BaseSelect,
    BaseSelectOption,
  },
  setup(props, { attrs }) {
    return { props, attrs, COUNTRY_LIST, CONTENT_OPTIONS }
  },
  template: `
    <BaseSelect v-bind="{ props, attrs }" :options="CONTENT_OPTIONS">
      <BaseSelectOption v-for="country in COUNTRY_LIST"
        :key="country"
        :value="country"
      >
        {{ country }}
      </BaseSelectOption>
    </BaseSelect>
  `,
})

const setup = (
  options: RenderOptions = {},
  Component: Component = BaseSelect,
) => {
  const renderOptions = {
    ...options,
    global: {
      provide: {
        fieldVariant: 'default',
      },
    },
    props: {
      placeholder: `${CONTENT_PLACEHOLDER}`,
      options: CONTENT_OPTIONS,
      ...options.props,
    },
  }

  return render(Component, renderOptions)
}

describe('<BaseSelect />', () => {
  it('should display a button with a placeholder', async () => {
    const wrapper = setup()
    const trigger = wrapper.getByRole('button')

    expect(trigger).toHaveTextContent(CONTENT_PLACEHOLDER)
    expect(trigger).toBeInstanceOf(HTMLButtonElement)
  })

  it('should display a button with selected value text', async () => {
    const wrapper = setup({
      props: {
        placeholder: CONTENT_PLACEHOLDER,
        modelValue: COUNTRY_LIST[0],
      },
    })
    const trigger = wrapper.getByRole('button')

    expect(trigger).not.toHaveTextContent(CONTENT_PLACEHOLDER)
    expect(trigger).toHaveTextContent(COUNTRY_LIST[0])
  })

  it('should be disable disabled', async () => {
    const wrapper = setup({
      props: {
        disabled: true,
        placeholder: CONTENT_PLACEHOLDER,
        modelValue: COUNTRY_LIST[0],
      },
    })
    const trigger = wrapper.getByRole('button')

    expect(trigger).toBeDisabled()
  })

  it('should open options dialog on click', async () => {
    const wrapper = setup({
      props: {
        placeholder: CONTENT_PLACEHOLDER,
        modelValue: COUNTRY_LIST[0],
      },
    })
    const trigger = wrapper.getByRole('button')

    await trigger.click()

    const menu = await wrapper.getByRole('listbox')
    const options = await wrapper.getAllByRole('option')

    expect(menu).toBeInTheDocument()
    expect(options).toHaveLength(COUNTRY_LIST.length)
  })

  it('should open options dialog on trigger click when the options are provided as slot', async () => {
    const wrapper = setup(
      {
        props: {
          placeholder: CONTENT_PLACEHOLDER,
          modelValue: COUNTRY_LIST[0],
        },
      },
      BaseSelectWithSlot,
    )
    const trigger = wrapper.getByRole('button')

    await trigger.click()

    const menu = await wrapper.getByRole('listbox')
    const options = await wrapper.getAllByRole('option')

    expect(menu).toBeInTheDocument()
    expect(options).toHaveLength(COUNTRY_LIST.length)
  })

  it('should select new value and emit update:model-value event', async () => {
    const updateCallback = vi.fn((e) => wrapper.rerender({ modelValue: e }))

    const wrapper = setup({
      props: {
        placeholder: CONTENT_PLACEHOLDER,
        modelValue: COUNTRY_LIST[0],
        'onUpdate:modelValue': updateCallback,
      },
    })
    const trigger = wrapper.getByRole('button')

    await trigger.click()

    const options = await wrapper.getAllByRole('option')

    await options[3].click()

    expect(updateCallback).toHaveBeenCalledTimes(1)
    expect(updateCallback).toHaveBeenCalledWith(CONTENT_OPTIONS[3].value)

    expect(trigger).toHaveTextContent(CONTENT_OPTIONS[3].value)
  })

  it('should close the dialog after the option select', async () => {
    const updateCallback = vi.fn((e) => wrapper.rerender({ modelValue: e }))

    const wrapper = setup({
      props: {
        placeholder: CONTENT_PLACEHOLDER,
        modelValue: COUNTRY_LIST[0],
        'onUpdate:modelValue': updateCallback,
      },
    })
    const trigger = wrapper.getByRole('button')

    await trigger.click()

    const menu = await wrapper.getByRole('listbox')
    const options = await wrapper.getAllByRole('option')

    await options[3].click()

    expect(menu).not.toBeInTheDocument()
  })
})
