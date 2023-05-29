import { vi } from 'vitest'
import { fireEvent, render } from '@testing-library/vue'
import { BasePagination } from './index'

describe('<BasePagination />', () => {
  it('should display next and prev buttons', async () => {
    const { queryAllByRole } = render(BasePagination, {
      slots: {
        default: 'showing results',
      },
    })

    const buttons = queryAllByRole('button')

    expect(buttons).toHaveLength(2)
  })

  it('should render both buttons as disabled', async () => {
    const { queryAllByRole } = render(BasePagination, {
      props: {
        hasNext: false,
        hasPrev: false,
      },
      slots: {
        default: 'showing results',
      },
    })

    const buttons = queryAllByRole('button')

    expect(buttons[0]).toBeDisabled()
    expect(buttons[1]).toBeDisabled()
  })

  it('should render next only as disabled', async () => {
    const { queryAllByRole } = render(BasePagination, {
      props: {
        hasNext: false,
        hasPrev: true,
      },
      slots: {
        default: 'showing results',
      },
    })

    const buttons = queryAllByRole('button')

    expect(buttons[0]).not.toBeDisabled()
    expect(buttons[1]).toBeDisabled()
  })

  it('should render prev only as disabled', async () => {
    const { queryAllByRole } = render(BasePagination, {
      props: {
        hasNext: true,
        hasPrev: false,
      },
      slots: {
        default: 'showing results',
      },
    })

    const buttons = queryAllByRole('button')

    expect(buttons[0]).toBeDisabled()
    expect(buttons[1]).not.toBeDisabled()
  })

  it('should call @change when clicking on the next/prev buttons', async () => {
    const { queryAllByRole, emitted } = render(BasePagination, {
      props: {
        hasNext: true,
        hasPrev: true,
      },
      slots: {
        default: 'showing results',
      },
    })

    const buttons = queryAllByRole('button')
    await fireEvent.click(buttons[0])
    await fireEvent.click(buttons[1])

    expect(emitted().change[0]).toEqual(['prev', expect.any(Object)])
    expect(emitted().change[1]).toEqual(['next', expect.any(Object)])
  })

  it('should render slot', async () => {
    const { queryAllByText } = render(BasePagination, {
      props: {
        hasNext: true,
        hasPrev: true,
      },
      slots: {
        default: 'showing results',
      },
    })

    const slot = queryAllByText('showing results')
    expect(slot).toHaveLength(2)
  })
})
