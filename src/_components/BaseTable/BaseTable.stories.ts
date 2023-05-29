import { Story, Meta } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'
import BaseTable from './BaseTable.vue'
import BaseTableCell from './BaseTableCell.vue'
import BaseTableHeader from '../BaseTable/BaseTableHeader.vue'
import BaseCheckbox from '../BaseCheckbox/BaseCheckbox.vue'
import BaseTooltip from '../BaseTooltip/BaseTooltip.vue'
import BaseTableFooter from '../BaseTable/BaseTableFooter.vue'
import BasePagination from '../BasePagination/BasePagination.vue'
import { BaseTableProps } from './BaseTableTypes'
import {
  MicrophoneIcon,
  EmojiHappyIcon,
  EmojiSadIcon,
} from '@heroicons/vue/solid'

export default {
  title: 'Design System/Table (WIP)',
  component: BaseTable,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=453%3A2619',
    },
  },
} as Meta

const Template: Story<BaseTableProps> = (args) => ({
  components: {
    BaseTable,
    BaseTableCell,
    BaseTableHeader,
    BaseCheckbox,
  },
  setup() {
    const handleRowClick = (param) => action('@row-click')(param)
    return { args, handleRowClick }
  },
  template: `
    <div style="min-width: 300px" >
      <div >
        <BaseTable v-bind="args" @row-click="handleRowClick">
          <template #loading>
            <div class="twc-w-full twc-h-full twc-flex twc-justify-center twc-items-center twc-bg-gray-400 twc-bg-opacity-20"> Loading...</div>
          </template>
          <BaseTableCell field="checkbox" class="twc-text-left twc-w-4">
            <BaseCheckbox/>
          </BaseTableCell>
          <BaseTableCell
            v-slot="{ row }"
            field="id"
            label="ID"
            class="twc-w-18"
          >
            {{ row.id }}
          </BaseTableCell>
          <BaseTableCell v-slot="{ row }" field="platform" label="Platform">
            {{ row.platform }}
          </BaseTableCell>
          <BaseTableCell
            v-slot="{ row }"
            field="lastName"
            label="#of Assets"
          >
            {{ row.assetsCount }}
          </BaseTableCell>
          <BaseTableCell v-slot="{ row }" field="status" label="Status">
            <div
              :class="
                row.status === 'Draft' ? 'twc-text-danger' : 'twc-text-primary'
              "
            >
              {{ row.status }}
            </div>
          </BaseTableCell>
          <BaseTableCell field="actions" label class="twc-text-right twc-w-4">
            <a class="twc-text-primary-600 hover:twc-text-primary-900 twc-text-right twc-cursor-pointer BaseLinkCustom">
              View
            </a>
          </BaseTableCell>
          <BaseTableHeader field="checkbox">
            <BaseCheckbox/>
          </BaseTableHeader>
        </BaseTable>
      </div>
    </div>
  `,
})

const WithCustomFooterTemplate: Story<BaseTableProps> = (args) => ({
  components: {
    BaseTable,
    BaseTableCell,
    BaseTableHeader,
    BaseCheckbox,
    BaseTableFooter,
    BasePagination,
  },
  setup() {
    const handleRowClick = (param) => action('@row-click')(param)
    return { args, handleRowClick }
  },
  template: `
    <div style="" >
      <div >
        <BaseTable v-bind="args" @row-click="handleRowClick">
          <template #loading>
            <div class="twc-w-full twc-h-full twc-flex twc-justify-center twc-items-center twc-bg-gray-400 twc-bg-opacity-20"> Loading...</div>
          </template>
          <BaseTableCell field="checkbox" class="twc-text-left twc-w-4">
            <BaseCheckbox/>
          </BaseTableCell>
          <BaseTableCell
            v-slot="{ row }"
            field="id"
            label="ID"
            class="twc-w-18"
          >
            {{ row.id }}
          </BaseTableCell>
          <BaseTableCell v-slot="{ row }" field="platform" label="Platform">
            {{ row.platform }}
          </BaseTableCell>
          <BaseTableCell
            v-slot="{ row }"
            field="lastName"
            label="#of Assets"
          >
            {{ row.assetsCount }}
          </BaseTableCell>
          <BaseTableCell v-slot="{ row }" field="status" label="Status">
            <div
              :class="
                row.status === 'Draft' ? 'twc-text-danger' : 'twc-text-primary'
              "
            >
              {{ row.status }}
            </div>
          </BaseTableCell>
          <BaseTableCell field="actions" label class="twc-text-right twc-w-4">
            <a class="twc-text-primary-600 hover:twc-text-primary-900 twc-text-right twc-cursor-pointer BaseLinkCustom">
              View
            </a>
          </BaseTableCell>
          <BaseTableHeader field="checkbox">
            <BaseCheckbox/>
          </BaseTableHeader>
          <BaseTableFooter class="twc-flex twc-justify-center">
            <BasePagination>
              Showing results <b>1</b> -
              <b>10</b> of
              <b>100</b>
            </BasePagination>
          </BaseTableFooter>
        </BaseTable>
      </div>
    </div>
  `,
})

const CustomColumnTemplate: Story<BaseTableProps> = (args) => ({
  components: {
    BaseTable,
    BaseTableCell,
    BaseTableHeader,
    EmojiHappyIcon,
    EmojiSadIcon,
  },
  setup() {
    const handleRowClick = (param) => action('@row-click')(param)
    return { args, handleRowClick }
  },
  template: `
    <div style="min-width: 300px" >
      <div >
        <BaseTable v-bind="args" @row-click="handleRowClick">
          <template #loading>
            <div class="twc-w-full twc-h-full twc-flex twc-justify-center twc-items-center twc-bg-gray-400 twc-bg-opacity-20"> Loading...</div>
          </template>
          <BaseTableCell
            v-slot="{ row }"
            field="id"
            label="ID"
            class="twc-w-18 twc-bg-danger-50"
          >
            {{ row.id }}
          </BaseTableCell>
          <BaseTableCell v-slot="{ row }" field="name" label="Name">
            {{ row.name }}
          </BaseTableCell>
          <BaseTableCell
            v-slot="{ row }"
            field="release"
            label="release"
            class="twc-bg-primary-50"
          >
            {{ row.release }}
          </BaseTableCell>
          <BaseTableCell v-slot="{ row }" field="title" label="title">
              {{ row.title }}
          </BaseTableCell>
          <BaseTableCell field="actions" label class="twc-text-right w-4">
            <a class="text-indigo-600 hover:text-indigo-900 text-right cursor-pointer">
              Edit
            </a>
          </BaseTableCell>
          <BaseTableHeader field="release" class="twc-flex twc-items-center twc-w-full twc-bg-primary-100">
            Release
            <EmojiHappyIcon class="twc-w-4 twc-h-4 twc-text-primary-500"/>
          </BaseTableHeader>
          <BaseTableHeader field="id" class="twc-flex twc-items-center twc-w-full twc-bg-danger-100">
            ID
            <EmojiSadIcon class="twc-w-4 twc-h-4 twc-text-danger-500"/>
          </BaseTableHeader>
        </BaseTable>
      </div>
    </div>
  `,
})

const AssetTemplate: Story<BaseTableProps> = (args) => ({
  components: {
    BaseTable,
    BaseTableCell,
    BaseTableHeader,
    MicrophoneIcon,
    BaseTooltip,
  },
  setup() {
    const handleRowClick = (param) => action('@row-click')(param)
    return { args, handleRowClick }
  },
  template: `
    <div style="min-width: 300px" >
      <div >
        <BaseTable v-bind="args" @row-click="handleRowClick">
          <template #loading>
            <div class="twc-w-full twc-h-full twc-flex twc-justify-center twc-items-center twc-bg-gray-400 twc-bg-opacity-20"> Loading...</div>
          </template>
          <BaseTableCell field="asset" v-slot="{ row }" label="ASSET" class="twc-inline-flex">
            <BaseTooltip label="Audio recording">
              <MicrophoneIcon class="twc-w-4 twc-h-4 twc-self-center "/>
            </BaseTooltip>
          <div class="twc-ml-4">
            <div>
              {{row.asset.title}}
              </div>
              <div class="twc-text-gray-400">
              {{row.asset.author}}
              </div>
            </div>
          </BaseTableCell>
          <BaseTableCell
            v-slot="{ row }"
            field="matches"
            label="MATCHES"
            class="twc-text-right"
          >
            {{ row.matches }}
          </BaseTableCell>
        </BaseTable>
      </div>
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {
  isLoading: false,
  rowClickable: false,
  data: [
    {
      id: '3456',
      platform: 'Facebook',
      assetsCount: 3,
      status: 'Draft',
    },
    {
      id: '1531',
      platform: 'Twitter',
      assetsCount: 2,
      status: 'Pending RH review',
    },
    {
      id: '1262',
      platform: 'VK',
      assetsCount: 1,
      status: 'Draft',
    },
  ],
}

export const CustomFooter = WithCustomFooterTemplate.bind({})
CustomFooter.args = {
  isLoading: false,
  rowClickable: false,
  data: [
    {
      id: '3456',
      platform: 'Facebook',
      assetsCount: 3,
      status: 'Draft',
    },
    {
      id: '1531',
      platform: 'Twitter',
      assetsCount: 2,
      status: 'Pending RH review',
    },
    {
      id: '1262',
      platform: 'VK',
      assetsCount: 1,
      status: 'Draft',
    },
  ],
}

export const CustomColumn = CustomColumnTemplate.bind({})

CustomColumn.args = {
  isLoading: false,
  rowClickable: false,
  data: [
    {
      id: '3456',
      name: 'John Doe',
      release: 'John Doe (Album)',
      title: 'Sony Inc',
    },
    {
      id: '1531',
      name: 'James Bond',
      release: '007 (Single)',
      title: 'No time to die',
    },
    {
      id: '1262',
      name: 'Johnny English',
      release: '008 (Single)',
      title: 'Mr Bean',
    },
  ],
}

export const AssetTable = AssetTemplate.bind({})

AssetTable.args = {
  isLoading: false,
  rowClickable: false,
  data: [
    {
      id: '3456',
      asset: {
        title: 'Wave Spike',
        author: 'Golden Mercury',
      },
      matches: 100,
    },
    {
      id: '3411',
      asset: {
        title: 'Wave Spike',
        author: 'Golden Mercury',
      },
      matches: 400,
    },
    {
      id: '3423',
      asset: {
        title: 'Wave Spike',
        author: 'Golden Mercury',
      },
      matches: 200,
    },
  ],
}
