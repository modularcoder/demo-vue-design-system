
const { getStoryContext } = require('@storybook/test-runner')
const { VIEW_PORTS } = require('./viewports')

// storybook test-runner hooks
module.exports = {
  async preRender(page, story) {

    const storyContext = await getStoryContext(page, story)
    const selectedViewPort = VIEW_PORTS[storyContext.parameters.viewport.defaultViewport]
    if (!selectedViewPort) {
      return
    }

    // if the viewport is set from the story itself then adapt the interaction tests accordingly
    // this is not handled by storybook currently reference: https://github.com/storybookjs/test-runner/issues/85

    page.setViewportSize({
      width: selectedViewPort.width,
      height: 920
    })
  },
}
