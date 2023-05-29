import type { ArgTypes } from '@storybook/addons'
import { Meta, StoryFn } from '@storybook/vue3'
import { ref } from 'vue'
import BaseRadio from './BaseRadio.vue'
import { BaseRadioProps } from './BaseRadio.types'

const argTypes: ArgTypes = {
  disabled: {
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Makes the button disabled',
    control: {
      type: 'boolean',
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  modelValue: {
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Sets the value of the checkbox',
    control: {
      type: 'boolean',
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: `false` },
    },
  },
  nativeValue: {
    type: { name: 'string', required: false },
    defaultValue: 'off',
    description:
      'Sets the HTML native value of the input (used for array bindings)',
    control: {
      type: 'text',
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: `'off'` },
    },
  },
  default: {
    // not a prop!
    control: {
      type: 'text',
    },
    defaultValue: 'Select me',
    table: {
      type: {
        summary: 'template',
      },
      defaultValue: { summary: 'no-content' },
    },
  },
}

export default {
  title: 'Design System Next/Form/Radio',
  component: BaseRadio,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=4299%3A7683&t=CqEfBhDEGOdCx4rB-0',
    },
  },
  argTypes,
} as Meta<typeof BaseRadio>

export const States: StoryFn<BaseRadioProps> = () => ({
  components: { BaseRadio },
  setup() {
    return {}
  },
  template: `
    <div style="min-width: 400px;" class="twc-space-y-8">
      <h3>Variant default</h3>

      <h5 class="twc-text-gray-500">active</h5>

      <div class="twc-grid twc-grid-cols-2 twc-gap-8 twc-w-full">
        <BaseRadio :nativeValue="'hello'">Select me</BaseRadio>
        <BaseRadio :modelValue="'hello'" :nativeValue="'hello'">Select me</BaseRadio>
      </div>

      <h5 class="twc-text-gray-500">disabled</h5>

      <div class="twc-grid twc-grid-cols-2 twc-gap-8 twc-w-full">
        <BaseRadio :disabled="true" :nativeValue="'hello'">Select me</BaseRadio>
        <BaseRadio :disabled="true" :modelValue="'hello'" :nativeValue="'hello'">Select me</BaseRadio>
      </div>

      <h3>Variant error</h3>

      <h5 class="twc-text-gray-500">active</h5>

      <div class="twc-grid twc-grid-cols-2 twc-gap-8 twc-w-full">
        <BaseRadio variant="danger" :nativeValue="'hello'" >Select me</BaseRadio>
        <BaseRadio variant="danger" :modelValue="'hello'" :nativeValue="'hello'" >Select me</BaseRadio>
      </div>

      <h5 class="twc-text-gray-500">disabled</h5>

      <div class="twc-grid twc-grid-cols-2 twc-gap-8 twc-w-full">
        <BaseRadio variant="danger" :disabled="true" :nativeValue="'hello'">Select me</BaseRadio>
        <BaseRadio variant="danger" :disabled="true" :modelValue="'hello'" :nativeValue="'hello'" >Select me</BaseRadio>
      </div>
    </div>
  `,
})

export const WithCustomContent: StoryFn<BaseRadioProps> = () => ({
  components: { BaseRadio },
  setup() {
    const value = ref('')
    return { value }
  },
  template: `
    <div class="twc-max-w-[340px]">
      <BaseRadio v-model="value" native-value="one">
        <div>
          <div class="twc-font-bold twc-text-gray-700">
            Comments
          </div>
          <div class="twc-text-gray-500">
            Get notified when
            <a href="">someones posts</a>
            a comment on a posting.
          </div>
        </div>
      </BaseRadio>
    </div>
   `,
})

export const List: StoryFn<BaseRadioProps> = () => ({
  components: { BaseRadio },
  setup() {
    const value = ref()

    return { value }
  },
  template: `
    <div style="width: 320px;" class="twc-divide-y">
      <div class="twc-space-y-4 twc-mb-6">
        <BaseRadio v-model="value" native-value="one">
          Option one
        </BaseRadio>
        <BaseRadio v-model="value"  native-value="two">
          Option two
        </BaseRadio>
        <BaseRadio v-model="value"  native-value="three">
          Option three
        </BaseRadio>
      </div>
      <div class="twc-pt-6">
        <span class="twc-font-medium">Selected: </span> {{JSON.stringify(value)}}
      </div>
    </div>
  `,
})

export const Playground: StoryFn<BaseRadioProps> = (args) => ({
  components: { BaseRadio },
  setup() {
    return { args }
  },
  template: `
    <div style="min-width: 300px">
      <BaseRadio v-bind="args" >{{ args.default }}</BaseRadio>
    </div>
  `,
})
