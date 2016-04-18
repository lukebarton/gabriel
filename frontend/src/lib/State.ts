/// <reference path="../main.d.ts" />

export default class State {
  clone() {
    return Object.assign({}, this)
  }
}
