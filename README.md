# @pexeso/ui-core library v0.10.0

Core library of atomic Vue components used in multiple UI projects



### Linting 

In order to simplify the dependent project toolings, UI-Core comes with reusable ESLint distribution with preset configurations. Those configs are reusable from a dependent projects without a need to install ESLint per project.
In order to use eslint executable from the context of ui-core eslint dependency, the script section proxies executable `xeslint` script, so dependent projects may run linting reusing the ui-core eslint dependency like

`npm run xeslint --prefix node_modules/@pexeso/ui-core -- '../../../src' --ext '.ts,vue'  -c '../../../.eslintrc.js'`

This is defined a dependent proxy script

```
{
  "scripts": {
    "lint": "npm run xeslint --prefix node_modules/@pexeso/ui-core -- '../../../src' --ext '.ts,vue'  -c '../../../.eslintrc.js'"
  }
}
```

so inside the project you will just run `npm run lint`


### Testing

The project uses Vitest test suite runner with

- Vitest (instead of jest) for test running
- @testing-library/vue -> for better maintainable tests
- @testing-library/jest-dom -> for extending the assertion expressions (https://github.com/testing-library/jest-dom) 


### Package releasing and publishing

This package is distributed to GitHub packages. Releases are published via auto
https://intuit.github.io/auto/docs/configuration/autorc


### Suggested IDE setup:

In order to get the IDE intellisense correc, use Volar extension, and follow their instructions about take over mode.


### Known issues


