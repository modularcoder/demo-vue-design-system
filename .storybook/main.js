const path = require('path')

const config = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          // test: [/\.stories\.jsx?$/], This is default
          include: [path.resolve(__dirname, '../src')], // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
    {
      name: 'storybook-addon-designs',
      options: {
        renderTarget: 'tab',
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  features: {
    interactionsDebugger: true, // 👈 Enable playback controls
    previewMdx2: true,
  },
  babel: async (options) => {
    // Fix import.meta.env
    options.plugins.push('babel-plugin-transform-vite-meta-env')

    return {
      ...options,
    }
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // find the DefinePlugin
    const plugin = config.plugins.find(
      (plugin) => plugin.definitions?.['process.env'],
    )

    if (plugin) {
      plugin.definitions['process.env']['STORYBOOK_REVIEW_ID'] =
        process.env.REVIEW_ID
    }

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      include: path.resolve(__dirname, '../'),
    })

    // add mjs support for webpack ref: https://github.com/vueuse/vueuse/issues/718
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    })

    config.module.rules.push({
      test: /\.postcss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
      include: path.resolve(__dirname, '../'),
    })

    config.resolve.alias['@'] = path.resolve(__dirname, '..', 'src')
    config.resolve.alias['@pexeso/ui-core/ui-core.css'] = path.resolve(
      __dirname,
      '..',
      'dist/ui-core/ui-core.css',
    )
    config.resolve.alias['@pexeso/ui-core/current'] = path.resolve(
      __dirname,
      '..',
      'dist/ui-core/ui-core.mjs',
    )
    config.resolve.alias['@pexeso/ui-core/next/ui-core-next.css'] =
      path.resolve(__dirname, '..', 'dist/ui-core-next/ui-core-next.css')
    config.resolve.alias['@pexeso/ui-core/next'] = path.resolve(
      __dirname,
      '..',
      'dist/ui-core-next/ui-core-next.mjs',
    )

    const vueUse = config.module.rules.find((rule) => {
      return rule.loader && rule.loader.includes('vue-loader')
    })

    vueUse.options = {
      ...vueUse.options,
      refSugar: true,
    }
    // Return the altered config
    return config
  },
}

// Don't use it unless explicitly specified
if (process.env.STORYBOOK_USE_PSEUDO_STATES) {
  config.addons.push('storybook-addon-pseudo-states')
}

module.exports = config
