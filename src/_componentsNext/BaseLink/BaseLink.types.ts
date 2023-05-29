export enum BASE_LINK_TAG {
  A = 'a',
  SPAN = 'span',
  ROUTER_LINK = 'router-link',
}

export interface BaseLinkProps {
  disabled?: boolean
  external?: boolean
  tag?: `${BASE_LINK_TAG}`
}
