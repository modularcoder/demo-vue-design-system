<template>
  <h3 class="twc-mb-4">BaseTable</h3>
  <div class="twc-p-4 twc-mb-8 twc-bg-gray-50 twc-rounded-lg">
    <div style="min-width: 300px">
      <div>
        <BaseTable
          v-bind="args"
          :is-loading="false"
          @row-click="handleRowClick"
        >
          <template #loading>
            <div
              class="twc-flex twc-justify-center twc-items-center twc-w-full twc-h-full twc-bg-gray-400 twc-bg-opacity-20 sm:twc-rounded-lg"
            >
              Loading...
            </div>
          </template>

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
          <BaseTableCell v-slot="{ row }" field="lastName" label="#of Assets">
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
          <BaseTableCell field="actions" class="twc-w-4 twc-text-right">
            <a
              class="twc-text-right twc-text-primary-600 hover:twc-text-primary-900 twc-cursor-pointer BaseLinkCustom"
            >
              View
            </a>
          </BaseTableCell>

          <BaseTableFooter>
            <BasePaginationVue
              :has-next="true"
              :has-prev="false"
              @change="handlePaginationChange"
            >
              Showing results <b>{{ pagination.from }}</b> -
              <b>{{ pagination.to }}</b> of
              <b>{{ pagination.total }}</b>
            </BasePaginationVue>
          </BaseTableFooter>
        </BaseTable>
      </div>
      <div class="twc-my-4">
        <BaseTable v-bind="args" :is-loading="true" @row-click="handleRowClick">
          <template #loading>
            <div
              class="twc-flex twc-justify-center twc-items-center twc-w-full twc-h-full twc-bg-gray-400 twc-bg-opacity-20 sm:twc-rounded-lg"
            >
              Loading...
            </div>
          </template>

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
          <BaseTableCell v-slot="{ row }" field="lastName" label="#of Assets">
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
          <BaseTableCell field="actions" class="twc-w-4 twc-text-right">
            <a
              class="twc-text-right twc-text-primary-600 hover:twc-text-primary-900 twc-cursor-pointer BaseLinkCustom"
            >
              View
            </a>
          </BaseTableCell>
        </BaseTable>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import {
    BaseTable,
    BaseTableCell,
    BaseTableHeader,
    BaseTableFooter,
  } from '../_components/BaseTable'
  import BasePaginationVue from '../_components/BasePagination/BasePagination.vue'
  const pagination = {
    total: 100,
    from: 1,
    to: 10,
  }
  const args = {
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
  const handlePaginationChange = (action: 'prev' | 'next') => {
    console.log(action)
  }
  const handleRowClick = (row: any) => {
    console.log(row)
  }
</script>
