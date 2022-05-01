/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'roughjs/bundled/rough.cjs.js' {
  import Roughjs from 'roughjs/bin/rough.d.ts'
  export default Roughjs
}
