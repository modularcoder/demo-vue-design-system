import { withDesign } from 'storybook-addon-designs'
import { Story, StoryFn, Meta } from '@storybook/vue3'
import BaseDescriptionListItem from './BaseDescriptionListItem.vue'
import { BaseLink } from '../../BaseLink'
import { BASE_DESCRIPTION_LIST_ITEM_DIRECTION } from './BaseDescriptionListItem.types'

const design = {
  type: 'figma',
  url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=6737%3A9972&t=kBosn5AGIsTgK2yr-4',
}

const CONTENT = 'margotfoster@example.com'

export default {
  title: 'Design System Next/DescriptionList/DescriptionListItem',
  component: BaseDescriptionListItem,
  parameters: {
    layout: 'centered',
    design,
  },
  argTypes: {
    label: {
      defaultValue: 'Item label',
      description: 'Sets the label text',
      control: {
        type: 'text',
      },
    },
    direction: {
      control: {
        type: 'select',
        options: Object.values(BASE_DESCRIPTION_LIST_ITEM_DIRECTION),
      },
      description: 'Sets the direction of the item grid',
      defaultValue: BASE_DESCRIPTION_LIST_ITEM_DIRECTION.AUTO,
    },
    // Slots
    default: {
      name: 'Default',
      control: {
        type: 'text',
      },
      defaultValue: CONTENT,
      table: {
        type: {
          summary: 'template',
        },
        defaultValue: { summary: 'no-content' },
      },
    },
    Label: {
      name: 'Label',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'template',
        },
        defaultValue: { summary: 'no-content' },
      },
    },
  },
  decorators: [withDesign],
} as Meta<typeof BaseDescriptionListItem>

const DefaultTemplate: StoryFn<typeof BaseDescriptionListItem> = (args) => ({
  components: { BaseDescriptionListItem, BaseLink },
  setup() {
    return { ...args, CONTENT }
  },
  template: `
  <div class="twc-w-[400px] sm:twc-w-[1000px]">
    <BaseDescriptionListItem :label="label" :direction="direction">
      <div class="twc-flex twc-justify-between">
        <p>margotfoster@example.com</p>
        <BaseLink>Update</BaseLink>
      </div>
    </BaseDescriptionListItem>
  </div>
  `,
})

export const Default = DefaultTemplate.bind({})

export const DefaultMobile = DefaultTemplate.bind({})
DefaultMobile.args = {
  label: 'Item label',
  direction: BASE_DESCRIPTION_LIST_ITEM_DIRECTION.COLUMN,
}
DefaultMobile.parameters = {
  viewport: {
    defaultViewport: 'xs',
  },
}

export const Playground: StoryFn<typeof BaseDescriptionListItem> = (args) => ({
  components: { BaseDescriptionListItem },
  setup() {
    return { args }
  },
  template: `
    <div class="twc-w-60 sm:twc-w-[800px]">
      <BaseDescriptionListItem v-bind="args">
        <template #Label v-if="args.Label">
          {{ args.Label }}
        </template>

        {{ args.default }}
      </BaseDescriptionListItem>
    </div>
  `,
})
