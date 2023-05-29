export default {
  title: 'Design System/Typography',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=2%3A3',
    },
  },
}

const Template = (args) => ({
  components: {},
  setup() {
    return { args }
  },
  template: `
    <div class="twc-bg-gray-50 twc-p-16 twc-flex twc-flex-col twc-gap-10">

      <h1 class="twc-heading-1 twc-font-normal twc-text-gray-900">Typography styles</h1>

      <div class="twc-flex twc-items-center twc-gap-4">
        <div>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500 twc-w-44">Heading 1</p>
        </div>
        <div class="twc-flex twc-flex-col twc-gap-2">
          <p class="twc-heading-1 twc-text-gray-900">The quick brown fox jumps over the lazy dog.</p>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500">text-3xl/leading-9/font-light</p>
        </div>
      </div>

      <div class="twc-flex twc-items-center twc-gap-4">
        <div>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500 twc-w-44">Heading 1 medium</p>
        </div>
        <div class="twc-flex twc-flex-col twc-gap-2">
          <p class="twc-heading-1-medium twc-text-gray-900">The quick brown fox jumps over the lazy dog.</p>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500">text-3xl/leading-9/font-medium</p>
        </div>
      </div>

      <div class="twc-flex twc-items-center twc-gap-4">
        <div>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500 twc-w-44">Heading 2</p>
        </div>
        <div class="twc-flex twc-flex-col twc-gap-2">
          <p class="twc-heading-2 twc-text-gray-900">The quick brown fox jumps over the lazy dog.</p>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500">text-2xl/leading-8/font-light</p>
        </div>
      </div>

      <div class="twc-flex twc-items-center twc-gap-4">
        <div>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500 twc-w-44">Heading 2 medium</p>
        </div>
        <div class="twc-flex twc-flex-col twc-gap-2">
          <p class="twc-heading-2-medium twc-text-gray-900">The quick brown fox jumps over the lazy dog.</p>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500">text-2xl/leading-8/font-medium</p>
        </div>
      </div>

      <div class="twc-flex twc-items-center twc-gap-4">
        <div>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500 twc-w-44">Heading 3</p>
        </div>
        <div class="twc-flex twc-flex-col twc-gap-2">
          <p class="twc-heading-3 twc-text-gray-900">The quick brown fox jumps over the lazy dog.</p>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500">text-xl/leading-7/font-light</p>
        </div>
      </div>

      <div class="twc-flex twc-items-center twc-gap-4">
        <div>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500 twc-w-44">Heading 3 medium</p>
        </div>
        <div class="twc-flex twc-flex-col twc-gap-2">
          <p class="twc-heading-3-medium twc-text-gray-900">The quick brown fox jumps over the lazy dog.</p>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500">text-xl/leading-7/font-medium</p>
        </div>
      </div>
      
      <div class="twc-flex twc-items-center twc-gap-4">
        <div>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500 twc-w-44">Heading 4</p>
        </div>
        <div class="twc-flex twc-flex-col twc-gap-2">
          <p class="twc-heading-4 twc-text-gray-900">The quick brown fox jumps over the lazy dog.</p>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500">text-lg/leading-7/font-light</p>
        </div>
      </div>

      <div class="twc-flex twc-items-center twc-gap-4">
        <div>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500 twc-w-44">Heading 4 medium</p>
        </div>
        <div class="twc-flex twc-flex-col twc-gap-2">
          <p class="twc-heading-4-medium twc-text-gray-900">The quick brown fox jumps over the lazy dog.</p>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500">text-lg/leading-7/font-medium</p>
        </div>
      </div>

      <div class="twc-flex twc-items-center twc-gap-4">
        <div>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500 twc-w-44">Heading 5</p>
        </div>
        <div class="twc-flex twc-flex-col twc-gap-2">
          <p class="twc-heading-5 twc-text-gray-900">The quick brown fox jumps over the lazy dog.</p>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500">text-base/leading-6/font-light</p>
        </div>
      </div>

      <div class="twc-flex twc-items-center twc-gap-4">
        <div>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500 twc-w-44">Heading 5 medium</p>
        </div>
        <div class="twc-flex twc-flex-col twc-gap-2">
          <p class="twc-heading-5-medium twc-text-gray-900">The quick brown fox jumps over the lazy dog.</p>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500">text-base/leading-6/font-medium</p>
        </div>
      </div>

      <div class="twc-flex twc-items-center twc-gap-4">
        <div>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500 twc-w-44">Heading 6</p>
        </div>
        <div class="twc-flex twc-flex-col twc-gap-2">
          <p class="twc-heading-6 twc-text-gray-900">The quick brown fox jumps over the lazy dog.</p>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500">text-sm/leading-5/font-light</p>
        </div>
      </div>

      <div class="twc-flex twc-items-center twc-gap-4">
        <div>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500 twc-w-44">Heading 6 medium</p>
        </div>
        <div class="twc-flex twc-flex-col twc-gap-2">
          <p class="twc-heading-6-medium twc-text-gray-900">The quick brown fox jumps over the lazy dog.</p>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500">text-sm/leading-5/font-medium</p>
        </div>
      </div>

      <div class="twc-border-b-[1px] twc-border-x-gray-200" />

      <div class="twc-flex twc-items-center twc-gap-4">
        <div>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500 twc-w-44">Paragraph/Small</p>
        </div>
        <div class="twc-flex twc-flex-col twc-gap-2">
          <p class="twc-paragraph-small twc-text-gray-900">The quick brown fox jumps over the lazy dog.</p>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500">text-xs/leading-4/font-normal</p>
        </div>
      </div>

      <div class="twc-flex twc-items-center twc-gap-4">
        <div>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500 twc-w-44">Paragraph/Normal</p>
        </div>
        <div class="twc-flex twc-flex-col twc-gap-2">
          <p class="twc-paragraph-normal twc-text-gray-900">The quick brown fox jumps over the lazy dog.</p>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500">text-sm/leading-5/font-normal</p>
        </div>
      </div>

      <div class="twc-border-b-[1px] twc-border-x-gray-200" />

      <div class="twc-flex twc-items-center twc-gap-4">
        <div>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500 twc-w-44">Label/Small</p>
        </div>
        <div class="twc-flex twc-flex-col twc-gap-2">
          <p class="twc-label-small twc-text-gray-900">The quick brown fox jumps over the lazy dog.</p>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500">text-xs/leading-4/font-normal/tracking-wider/uppercase</p>
        </div>
      </div>

      <div class="twc-flex twc-items-center twc-gap-4">
        <div>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500 twc-w-44">Label/Large</p>
        </div>
        <div class="twc-flex twc-flex-col twc-gap-2">
          <p class="twc-label-large twc-text-gray-900">The quick brown fox jumps over the lazy dog.</p>
          <p class="twc-paragraph-small twc-font-medium twc-text-gray-500">text-sm/leading-5/font-normal/tracking-wider/uppercase</p>
        </div>
      </div>
    </div>
  `,
})

export const Default = Template.bind({})
// Default.args = {}
