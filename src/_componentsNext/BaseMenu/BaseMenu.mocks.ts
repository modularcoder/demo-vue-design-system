import { PencilAltIcon } from '@heroicons/vue/solid'
import { BaseMenuItemProps } from './BaseMenuItem/BaseMenuItem.types'

export const defaultItems: BaseMenuItemProps[] = [
  {
    id: 'edit',
    title: 'Edit',
  },
  {
    id: 'duplicate',
    title: 'Duplicate',
  },
  {
    id: 'share',
    title: 'Share',
  },
  {
    id: 'settings',
    title: 'Settings',
  },
  {
    id: 'add',
    title: 'Add to favorites',
  },
  {
    id: 'logout',
    title: 'Log out',
  },
]

export const profileItems: BaseMenuItemProps[] = [
  {
    id: 'edit',
    title: 'Edit',
    icon: PencilAltIcon,
  },
  {
    id: 'duplicate',
    title: 'Duplicate',
  },
  {
    id: 'share',
    title: 'Share',
  },
]
