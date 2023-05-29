import { app, addDecorator } from '@storybook/vue3'
// import { initializeWorker, mswDecorator } from 'msw-storybook-addon';
// import Oruga from '@oruga-ui/oruga-next'
import { VIEW_PORTS } from './viewports'
import { configure } from '@storybook/testing-library'
import '../src/index.css'

// initializeWorker();
// addDecorator(mswDecorator);

// app.use(Oruga, {
//   modal: {
//     animation: 'o-modal-animation',
//     scroll: 'clip',
//   },
// })

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: VIEW_PORTS,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  options: {
    storySort: {
      order: ['Intro'],
    },
  },
  // msw: []
}

export const decorators = [
  (story) => {
    // add configurations for the interaction tests to work with data-test-id
    configure({
      testIdAttribute: 'data-test-id',
    })
    return {
      components: { story },
      template: '<story />'
    }
  }]
