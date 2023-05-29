import { Meta, Story } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'
import BasePagination from './BasePagination.vue'
import { BasePaginationProps } from './BasePaginationTypes'

export default {
  title: 'Design System/Pagination',
  component: BasePagination,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=2848%3A6292',
    },
  },
} as Meta

const Template: Story<BasePaginationProps> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BasePagination },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const handleChange = (...param) => action('@change')(...param)
    return { args, handleChange }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <div style="min-width: 500px">
      <div >
        <BasePagination v-bind="args" @change="handleChange" class="twc-w-full">
          Showing results <b>1</b> -
          <b>10</b> of
          <b>100</b>
        </BasePagination>
      </div>
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {
  hasNext: true,
  hasPrev: true,
}
