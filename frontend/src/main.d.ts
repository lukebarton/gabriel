/// <reference path="../typings/main.d.ts" />

interface Window { devToolsExtension: any }

declare module 'react-tap-event-plugin/src/injectTapEventPlugin' {
  export = Function
}
