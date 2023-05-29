<template>
  <div class="twc-flex twc-relative twc-flex-col">
    <div
      class="twc-overflow-x-auto twc-w-full"
      :class="[!footer && 'twc--mb-1']"
    >
      <div
        class="twc-inline-block twc-min-w-full twc-align-middle"
        :class="[!footer && 'twc-pb-1']"
      >
        <div
          class="twc-overflow-hidden twc-relative twc-border twc-border-gray-200 twc-border-solid twc-shadow"
          :class="[footer ? 'sm:twc-rounded-t-lg' : 'sm:twc-rounded-lg']"
        >
          <table
            class="twc-min-w-full twc-divide-y twc-divide-gray-200 twc-divide-solid"
          >
            <thead class="twc-bg-gray-50">
              <tr>
                <template
                  v-for="(column, index) in newColumns"
                  :key="`table-header-${column.props.field}`"
                >
                  <th
                    :data-test-id="`${name || ''}-table-header-${
                      column.props?.field
                    }`"
                    scope="col"
                    class="twc-py-3 twc-text-xs twc-font-medium twc-tracking-wider twc-text-left twc-text-gray-500 twc-uppercase"
                    :class="
                      getColumnHorizontalSpacingClass(index, newColumns.length)
                    "
                    v-bind="newHeaders[column.props?.field]?.props"
                  >
                    <template v-if="!!newHeaders[column.props?.field]">
                      <component
                        :is="
                          getHeaderByField(column.props?.field).children.default
                        "
                      ></component>
                    </template>
                    <template v-else>
                      {{ column.props?.label }}
                    </template>
                  </th>
                </template>
              </tr>
            </thead>
            <tbody
              class="twc-bg-white twc-divide-y twc-divide-gray-200 twc-divide-solid"
            >
              <tr
                v-for="(row, rowIndex) in data"
                :key="customRowId ? row[customRowId] : rowIndex"
                :data-test-id="`${name || ''}-row-${
                  customRowId ? row[customRowId] : rowIndex
                }`"
                :class="{
                  'hover:twc-bg-gray-50 twc-cursor-pointer': rowClickable,
                }"
                @click="handleRowClick(row)"
              >
                <td
                  v-for="(col, index) in newColumns"
                  :key="`${getProp(col, 'field')}-${rowIndex}`"
                  :data-test-id="`${name || ''}-${getProp(
                    col,
                    'field',
                  )}-${rowIndex}`"
                  class="twc-py-4 twc-text-sm"
                  :class="
                    getColumnHorizontalSpacingClass(index, newColumns.length)
                  "
                  v-bind="col.props"
                >
                  <component
                    :is="col.children?.default"
                    :row="row"
                    :column="col"
                    :index="rowIndex"
                  ></component>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div
      v-if="footer"
      class="twc-bg-white twc-border-x twc-border-b twc-border-gray-200 sm:twc-rounded-b-lg"
      v-bind="footer?.props"
    >
      <component :is="footer.children?.default"></component>
    </div>
    <template v-if="isLoading && $slots.loading">
      <div class="twc-absolute twc-w-full twc-h-full sm:twc-rounded-lg">
        <slot name="loading"></slot>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  import { computed, useSlots, VNode, PropType, toRaw } from 'vue'
  import type { BaseTableProps } from './BaseTableTypes'

  const props = defineProps({
    isLoading: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
    data: {
      type: Array as PropType<BaseTableProps['data']>,
      default: () => [],
    },
    rowClickable: {
      type: Boolean,
      default: false,
    },
    customRowId: {
      type: String,
      default: '',
    },
  })

  const emit = defineEmits(['rowClick'])

  const newColumns = computed(() => {
    let cols: any[] = []
    const slots = useSlots()
    let children: VNode[] = []
    if (slots.default) {
      children = slots.default()
    } else {
      return []
    }

    children.forEach((child) => {
      if (child.children && child.children instanceof Array) {
        cols = [...cols, ...child.children]
      } else if (
        child.type.valueOf() &&
        (child.type.valueOf() as { name: string }).name === 'BaseTableCell'
      ) {
        cols.push(child)
      }
    })
    return cols
  })

  const getProp = (col: any, prop: string) => {
    if (!col) {
      return ''
    }
    return col.props
      ? typeof col.type.props[prop] === 'boolean' && col.props[prop] === ''
        ? true
        : col.props[prop]
      : null
  }

  const newHeaders = computed(() => {
    let headers: { [key: string]: VNode | undefined | any } = {}
    const slots = useSlots()
    let children: VNode[] = []
    if (slots.default) {
      children = slots.default()
    } else {
      return {}
    }
    children.forEach((child) => {
      if (
        child.type.valueOf() &&
        (child.type.valueOf() as { name: string }).name === 'BaseTableHeader'
      ) {
        headers[(child.props || { field: '' }).field] = child
      }
    })
    return headers
  })

  const footer = computed(() => {
    let footers: (VNode | undefined | any)[] = []

    const slots = useSlots()
    let children: VNode[] = []
    if (slots.default) {
      children = slots.default()
    } else {
      return null
    }

    children.forEach((child) => {
      if (
        child.type.valueOf() &&
        (child.type.valueOf() as { name: string }).name === 'BaseTableFooter'
      ) {
        footers.push(child)
      }
    })

    if (footers.length > 1) {
      throw new Error(
        'BaseTable components expects only one BaseTableFooter component',
      )
    }

    return footers[0] || null
  })

  const getHeaderByField = (field: string): any =>
    newHeaders.value[field] || { children: { default: () => '' } }

  const getColumnHorizontalSpacingClass = (
    columnIndex: number,
    totalColumns: number,
  ) => {
    let paddingLeftClass = 'twc-pl-3'
    let paddingRightClass = 'twc-pr-3'

    if (columnIndex === 0) {
      paddingLeftClass = 'twc-pl-6'
    }

    if (columnIndex === totalColumns - 1) {
      paddingRightClass = 'twc-pr-6'
    }

    return `${paddingLeftClass} ${paddingRightClass}`
  }

  const handleRowClick = (row: BaseTableProps['data'][0]) => {
    if (props.rowClickable) {
      emit('rowClick', toRaw(row))
    }
  }
</script>

<style lang="scss"></style>
