import { vi } from 'vitest'
import { h } from 'vue'
import { render } from '@testing-library/vue'
import BaseTable from './BaseTable.vue'
import BaseTableCell from './BaseTableCell.vue'
import BaseTableHeader from './BaseTableHeader.vue'
import { Optional } from '@/_types'
import { fireEvent, waitFor } from '@testing-library/dom'

const createTableCellSlotComponent = (
  fieldName: string,
  additionalProps: Optional<{ class?: string }> = {},
) => {
  return h(
    BaseTableCell,
    {
      label: fieldName,
      field: fieldName,
      ...additionalProps,
    },
    {
      default: (props: { row: { id: string } }) =>
        h('span', { 'data-test-id': 'cell' }, props.row.id),
    },
  )
}

const createTableHeaderSlotComponent = (
  fieldName: string,
  additionalProps: Optional<{ class?: string }> = {},
) => {
  return h(
    BaseTableHeader,
    {
      field: fieldName,
      ...additionalProps,
    },
    {
      default: (props: { field: string }) =>
        h('span', { 'data-test-id': 'header' }, props.field),
    },
  )
}

describe('BaseTable', () => {
  it('should render loading component when loading is true', () => {
    const { getByTestId } = render(BaseTable, {
      props: {
        data: [],
        isLoading: true,
      },
      slots: {
        loading: '<div data-test-id="loading"> </div>',
      },
    })
    expect(getByTestId('loading')).toBeInstanceOf(HTMLDivElement)
  })

  it('should render the table Header item correctly', () => {
    const { getByTestId } = render(BaseTable, {
      props: {
        isLoading: false,
        data: [{ id: '100' }],
        customRowId: 'id',
        name: 'base',
      },
      slots: {
        default() {
          return [createTableCellSlotComponent('id')]
        },
      },
    })

    expect(getByTestId('base-table-header-id').textContent).toContain('id')
  })

  it('should render the custom BaseTableCell slot component correctly', () => {
    const { getByTestId } = render(BaseTable, {
      props: {
        isLoading: false,
        data: [{ id: '100' }],
        customRowId: 'id',
      },
      slots: {
        default() {
          return [createTableCellSlotComponent('id')]
        },
      },
    })

    expect(getByTestId('cell').textContent).toContain('100')
  })

  it('should pass through all properties into td element', () => {
    const mockFn = vi.fn()
    const wrapper = render(BaseTable, {
      props: {
        isLoading: false,
        data: [{ id: '100' }],
        customRowId: 'id',
        name: 'base',
      },
      slots: {
        default() {
          return [
            createTableCellSlotComponent('id', {
              class: 'custom',
              role: 'table-cell',
              click: mockFn,
            }),
          ]
        },
      },
    })

    const cell = wrapper.getByTestId('base-id-0')

    expect(cell.classList.contains('custom')).toBeTruthy()
    expect(cell.getAttribute('role')).toBe('table-cell')

    fireEvent.click(cell)
    waitFor(() => expect(mockFn).toHaveBeenCalled())
  })

  it('should render custom header component', () => {
    const { getByTestId } = render(BaseTable, {
      props: {
        isLoading: false,
        data: [{ id: '100' }],
        customRowId: 'id',
      },
      slots: {
        default() {
          return [
            createTableCellSlotComponent('id'),
            createTableHeaderSlotComponent('id'),
          ]
        },
      },
    })

    expect(getByTestId('header')).toBeInstanceOf(HTMLElement)
  })

  it('should pass through all properties into th element', () => {
    const mockFn = vi.fn()
    const { getByTestId } = render(BaseTable, {
      props: {
        isLoading: false,
        data: [{ id: '100' }],
        customRowId: 'id',
        name: 'base',
      },
      slots: {
        default() {
          return [
            createTableCellSlotComponent('id'),
            createTableHeaderSlotComponent('id', {
              class: 'custom',
              role: 'table-header',
              click: mockFn,
            }),
          ]
        },
      },
    })

    const header = getByTestId('base-table-header-id') as HTMLTableElement

    // expect(header.get).toInclude('custom')
    expect(header.classList.contains('custom'))
    expect(header.getAttribute('role')).toBe('table-header')
    fireEvent.click(header)

    waitFor(() => expect(mockFn).toHaveBeenCalled())
  })

  it('should fire rowClick event when rowClickable is true', () => {
    const mockFn = vi.fn()
    const { getByTestId } = render(BaseTable, {
      props: {
        isLoading: false,
        data: [{ id: '100' }],
        customRowId: 'id',
        name: 'base',
        rowClickable: true,
        rowClick: mockFn,
      },
      slots: {
        default() {
          return [createTableCellSlotComponent('id')]
        },
      },
    })
    const row = getByTestId('base-row-100')

    fireEvent.click(row)
    waitFor(() => expect(mockFn).toHaveBeenCalled())
  })
})
