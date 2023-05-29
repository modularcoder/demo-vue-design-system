import { Meta, Story } from '@storybook/vue3'
import { ref } from 'vue'
import BaseRadio from './BaseRadio.vue'

export default {
  title: 'Design System/Forms/Radio',
  component: BaseRadio,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=705%3A4352',
    },
  },
  argTypes: {
    variant: {
      options: ['default', 'danger', 'warning', 'success'],
      control: { type: 'select' },
    },
    value: {
      options: ['one', 'two', 'three'],
      control: { type: 'select' },
    },
  },
} as Meta

interface BaseRadio {
  value?: string
  variant: 'default' | 'danger' | 'warning' | 'success'
}

const Template: Story<BaseRadio> = (args) => ({
  components: { BaseRadio },
  setup() {
    const value = ref(args.value)
    return { args, value }
  },
  template: `
     <div style="min-width: 300px">
       <div >
         <BaseRadio v-bind="args" v-model="value" native-value="one">
           <p>Option one </p>
         </BaseRadio>
         <BaseRadio v-bind="args" v-model="value" native-value="two">
           <p>Option two </p>
         </BaseRadio>
         <BaseRadio v-bind="args" v-model="value" native-value="three">
           <p>Option three </p>
         </BaseRadio>
       </div>
     </div>
   `,
})

export const Default = Template.bind({})
Default.args = {
  variant: 'default',
  value: '',
}
