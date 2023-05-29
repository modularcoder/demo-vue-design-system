import { render } from '@testing-library/vue'
import { BaseBadge } from './index'

describe('<BaseBadge />', () => {
  it('should display a badge with a correct label', async () => {
    const label = 'Badge label'
    const badge = render(BaseBadge, {
      slots: {
        default: label,
      },
    })

    expect(badge.html()).to.contain(label)
  })
})
