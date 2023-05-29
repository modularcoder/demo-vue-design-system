import { withDesign } from 'storybook-addon-designs'
import { Story, StoryFn, Meta } from '@storybook/vue3'
import { BaseDescriptionListItem } from './BaseDescriptionListItem'
import { BaseBadge } from '../BaseBadge'
import { BaseLink } from '../BaseLink'
import BaseDescriptionList from './BaseDescriptionList.vue'
import { BASE_DESCRIPTION_LIST_ITEM_DIRECTION } from './BaseDescriptionListItem/BaseDescriptionListItem.types'

const design = {
  type: 'figma',
  url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=6737%3A9972&t=kBosn5AGIsTgK2yr-4',
}

export default {
  title: 'Design System Next/DescriptionList',
  component: BaseDescriptionList,
  parameters: {
    layout: 'centered',
    design,
  },
  decorators: [withDesign],
} as Meta<typeof BaseDescriptionList>

const DefaultTemplate: StoryFn<typeof BaseDescriptionList> = (args) => ({
  components: {
    BaseBadge,
    BaseLink,
    BaseDescriptionListItem,
    BaseDescriptionList,
  },
  setup() {
    return { ...args }
  },
  template: `
    <div class="twc-w-[400px] sm:twc-w-[800px] twc-flex twc-flex-col twc-items-center">
        <BaseDescriptionList>
          <BaseDescriptionListItem label="Name" :direction="direction">
              <div class="twc-flex twc-justify-between">
                  Brenna
                  <BaseLink>High five</BaseLink>
              </div>
          </BaseDescriptionListItem>
          <BaseDescriptionListItem label="Item label" :direction="direction">
              <div class="twc-flex twc-justify-between">
                <p>margotfoster@example.com</p>
                <BaseLink>Update</BaseLink>
              </div>
            </BaseDescriptionListItem>
          <BaseDescriptionListItem label="Status" :direction="direction">
              <BaseBadge size="lg" variant="success">Success</BaseBadge>
          </BaseDescriptionListItem>
          <BaseDescriptionListItem label="Details" :direction="direction">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt 
              cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. 
              Sit id mollit nulla mollit nostrud in ea officia proident. 
              Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
          </BaseDescriptionListItem>
        </BaseDescriptionList>
    </div>
  `,
})

const TwoColumnsExample: StoryFn<typeof BaseDescriptionList> = (args) => ({
  components: {
    BaseBadge,
    BaseLink,
    BaseDescriptionListItem,
    BaseDescriptionList,
  },
  setup() {
    return { ...args }
  },
  template: `
    <div class="twc-w-[400px] sm:twc-w-[800px]">        
      <div class="twc-flex twc-flex-col sm:twc-flex-row sm:twc-gap-8 twc-divide-y twc-divide-gray-100 sm:twc-divide-none">
        <BaseDescriptionList>
          <BaseDescriptionListItem label="Name" :direction="direction">
              <div class="twc-flex twc-justify-between">
                  Brenna
                  <BaseLink>High five</BaseLink>
              </div>
          </BaseDescriptionListItem>
          <BaseDescriptionListItem label="Email" :direction="direction">
              <div class="twc-flex twc-justify-between">
                  brenna@example.com
                  <BaseLink>Update</BaseLink>
              </div>
          </BaseDescriptionListItem>
          <BaseDescriptionListItem label="Status" :direction="direction">
              <BaseBadge size="lg" variant="success">Success</BaseBadge>
          </BaseDescriptionListItem>
          <BaseDescriptionListItem label="Details" :direction="direction">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt 
              cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. 
              Sit id mollit nulla mollit nostrud in ea officia proident. 
              Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
          </BaseDescriptionListItem>
        </BaseDescriptionList>
        
        <BaseDescriptionList>
          <BaseDescriptionListItem label="Name" :direction="direction">
              <div class="twc-flex twc-justify-between">
                  Brenna
                  <BaseLink>High five</BaseLink>
              </div>
          </BaseDescriptionListItem>
          <BaseDescriptionListItem label="Email" :direction="direction">
              <div class="twc-flex twc-justify-between">
                  brenna@example.com
                  <BaseLink>Update</BaseLink>
              </div>
          </BaseDescriptionListItem>
          <BaseDescriptionListItem label="Status" :direction="direction">
              <BaseBadge size="lg" variant="success">Success</BaseBadge>
          </BaseDescriptionListItem>
          <BaseDescriptionListItem label="Details" direction="column">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt 
              cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. 
              Sit id mollit nulla mollit nostrud in ea officia proident. 
              Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
          </BaseDescriptionListItem>
        </BaseDescriptionList>
      </div>
    </div>
  `,
})

export const Default = DefaultTemplate.bind({})
Default.args = {
  direction: BASE_DESCRIPTION_LIST_ITEM_DIRECTION.ROW,
}

export const DefaultMobile = DefaultTemplate.bind({})
DefaultMobile.args = {
  direction: BASE_DESCRIPTION_LIST_ITEM_DIRECTION.COLUMN,
}
DefaultMobile.parameters = {
  viewport: {
    defaultViewport: 'xs',
  },
}

export const TwoColumns = TwoColumnsExample.bind({})
TwoColumns.args = {
  direction: BASE_DESCRIPTION_LIST_ITEM_DIRECTION.COLUMN,
}
