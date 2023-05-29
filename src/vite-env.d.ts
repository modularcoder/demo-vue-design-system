/// <reference types="vue/ref-macros" />
/// <reference types="vite/client" />

// for native html elements
declare module '@vue/runtime-dom' {
  interface HTMLAttributes {
      [key: string]: any
  }
}

// for vue components
declare module '@vue/runtime-core' {
  interface AllowedComponentProps {
      [key: string]: any
  }
}

export { }
