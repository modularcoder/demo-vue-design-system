import BaseMenuItem from './BaseMenuItem.vue'
import { BaseMenuItemProps, BASE_MENU_ITEM_TAG } from './BaseMenuItem.types'
import { render } from '@testing-library/vue'
const title = 'title'
const description = 'description'
const testId = 'testid'
const href = 'https://www.pex.com'
describe('<BaseMenuItem/>', () => {
  it('should display MenuItem with correct title as slot', async () => {
    const { getByText } = render(BaseMenuItem, {
      props: { id: title },
      slots: { default: title },
    })

    expect(getByText(title)).toBeInTheDocument()
  })

  it('should display MenuItem with correct title as prop', async () => {
    const { getByText } = render(BaseMenuItem, {
      props: {
        id: title,
        title: title,
      } as BaseMenuItemProps,
    })

    expect(getByText(title)).toBeInTheDocument()
  })

  it('should display MenuItem with correct description as prop', async () => {
    const { getByText } = render(BaseMenuItem, {
      props: {
        id: title,
        title: title,
        description: description,
      } as BaseMenuItemProps,
    })

    expect(getByText(description)).toBeInTheDocument()
  })

  it('should disable MenuItem', async () => {
    const { getByTestId } = render(BaseMenuItem, {
      props: {
        ['data-test-id']: testId,
        id: title,
        title: title,
        disabled: true,
      } as BaseMenuItemProps,
    })

    const el = getByTestId(testId)

    expect(el).toHaveAttribute('tabindex', '-1')
  })

  it('should render the <a /> tag correctly', async () => {
    const { container } = render(BaseMenuItem, {
      props: {
        ['data-test-id']: testId,
        id: title,
        title: title,
        tag: BASE_MENU_ITEM_TAG.A,
        href: href,
      } as BaseMenuItemProps,
    })

    const el = container.querySelector('a')

    expect(el).toHaveAttribute('href', href)
  })

  it('should render the <router-link /> tag correctly', async () => {
    const { container } = render(BaseMenuItem, {
      props: {
        ['data-test-id']: testId,
        id: title,
        title: title,
        tag: BASE_MENU_ITEM_TAG.ROUTER_LINK,
        to: href,
      } as BaseMenuItemProps,
    })

    const el = container.querySelector('router-link')

    expect(el).toHaveAttribute('to', href)
  })
})
