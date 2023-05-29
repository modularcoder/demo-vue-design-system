export enum BASE_DESCRIPTION_LIST_ITEM_DIRECTION {
  ROW = 'row',
  COLUMN = 'column',
  AUTO = 'auto',
}

export interface BaseDescriptionListItemProps {
  label: string
  direction?: `${BASE_DESCRIPTION_LIST_ITEM_DIRECTION}`
}
