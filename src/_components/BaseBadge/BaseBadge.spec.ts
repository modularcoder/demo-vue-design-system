import { render } from '@testing-library/vue'
import { BaseBadge } from './index'

describe('<BaseBadge />', () => {
  it('displays badge with desired label', async () => {
    const label = 'Badge label'
    const badge = render(BaseBadge, {
      slots: {
        default: label,
      },
    })

    expect(badge.html()).to.contain(label)
  })

  it('displays badge with correct classes', async () => {
    const { getByTestId } = render(BaseBadge, {
      slots: {
        default: 'Badge label',
      },
      props: {
        variant: 'success',
        size: 'small',
        rounded: true,
      },
    })

    const badgeBase = getByTestId('badge-base')

    expect(badgeBase).toHaveClass(
      'twc-bg-success-100 twc-text-success-800 twc-text-xs twc-px-2.5 twc-rounded-full',
    )
  })

  it('display badge with dot correct class', async () => {
    const { getByTestId } = render(BaseBadge, {
      slots: {
        default: 'Badge label',
      },
      props: {
        dot: true,
        variant: 'danger',
      },
    })

    const badgeDot = getByTestId('badge-dot')

    expect(badgeDot).toBeInTheDocument()
    expect(badgeDot).toHaveClass('twc-bg-danger-400')
  })
})
