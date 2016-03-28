/// <reference path="../main.d.ts" />

import * as React from 'react'

export interface TextboxProps {
  value: string,
  onChange: (e) => {}
}

export class Textbox extends React.Component<TextboxProps, any> {
  render() {
    const { value, onChange } = this.props;

    return (
      <input
        type="text"
        value={ value }
        onChange={ onChange }
      />
    )
  }
}

export default Textbox
