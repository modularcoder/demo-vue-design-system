import { Meta, Story } from '@storybook/vue3'
import { ref } from 'vue'
import BaseSelect from './BaseSelect.vue'
import BaseSelectOption from './BaseSelectOption.vue'
import { BaseSelectProps } from './BaseSelectTypes'
import { COUNTRY_LIST } from '../../_statics/counties'

export default {
  title: 'Design System/Forms/Select',
  component: BaseSelect,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      options: ['default', 'danger', 'warning', 'success'],
      control: { type: 'select' },
    },
  },
} as Meta

const Template: Story<BaseSelectProps> = (args) => ({
  components: { BaseSelect, BaseSelectOption },
  setup() {
    const value = ref(args.modelValue || '')
    return { args, value, COUNTRY_LIST }
  },
  template: `
      <div style="width: 300px">
        <div>
          <BaseSelect v-bind="args" v-model="value">
            <BaseSelectOption
            v-for="country in COUNTRY_LIST"
            :key="country"
            :value="country"
          >
            {{ country }}
          </BaseSelectOption>
        </BaseSelect>
        </div>
      </div>
    `,
})

export const Default = Template.bind({})
Default.args = {
  variant: 'default',
  placeholder: 'Select country',
}
