import { withDesign } from 'storybook-addon-designs'
import { StoryFn, Meta } from '@storybook/vue3'
import { BASE_LINK_TAG, BaseLinkProps } from './BaseLink.types'
import BaseLink from './BaseLink.vue'

const CONTENT = 'Link Text'

const design = {
  type: 'figma',
  url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=5855%3A16295&t=wz6ZIxBGYM7WexMq-0',
}

export default {
  title: 'Design System Next/Link',
  component: BaseLink,
  parameters: {
    layout: 'centered',
    design,
  },
  argTypes: {
    target: {
      description: 'Sets the target attribute of link',
      control: {
        type: 'select',
        options: [undefined, '_blank', '_self', '_parent', '_top'],
      },
    },

    tag: {
      type: { name: 'string', required: false },
      defaultValue: BASE_LINK_TAG.A,
      description: 'Sets the tag component of the link',
      control: {
        type: 'select',
        options: Object.values(BASE_LINK_TAG),
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: `'${BASE_LINK_TAG.A}'` },
      },
    },
    href: {
      type: { name: 'string', required: false },
      defaultValue: undefined,
      description:
        'Sets the href attribute of the button (if the "a" is used as a tag)',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
      },
    },
    to: {
      type: { name: 'string', required: false },
      defaultValue: '#',
      description:
        'Sets the router-link "to" attribute of the link (if the "router-link" is used as a tag)',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: ['string', 'object'] },
        defaultValue: { summary: undefined },
      },
    },

    // Slots
    default: {
      name: 'Default',
      // not a prop!
      control: {
        type: 'text',
      },
      defaultValue: CONTENT,
      table: {
        type: {
          summary: 'template',
        },
        defaultValue: { summary: 'no-content' },
      },
    },
  },
  decorators: [withDesign],
} as Meta<typeof BaseLink>

const LinkTemplate: StoryFn<BaseLinkProps> = (args) => ({
  components: { BaseLink },
  setup() {
    return { args }
  },
  template: `<BaseLink v-bind="args">{{ args.default }}</BaseLink>`,
})

export const Default = LinkTemplate.bind({})

Default.args = {
  default: CONTENT,
  target: undefined,
  disabled: false,
  external: false,
}

export const External = LinkTemplate.bind({})

External.args = {
  default: CONTENT,
  target: undefined,
  disabled: false,
  external: true,
}

export const Disbled = LinkTemplate.bind({})

Disbled.args = {
  default: CONTENT,
  href: 'https://youtube.com',
  target: undefined,
  disabled: true,
  external: false,
}

export const NewWindow = LinkTemplate.bind({})

NewWindow.args = {
  default: CONTENT,
  href: 'https://youtube.com',
  target: '_blank',
  disabled: false,
  external: false,
}
