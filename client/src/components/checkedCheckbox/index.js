import React, { Component } from "react";
import { render } from "react-dom";
import Checkbox from '@material-ui/core/Checkbox'

class CheckedCheckbox extends Component {
  constructor() {
    super();
    this.state = {
      isTrue: false
    };
  }
  render() {
    return (
      <div>
        <Checkbox
          checked={this.state.isTrue}
          onChange={e => {
            console.log(e.target.checked);
            this.setState({ isTrue: e.target.checked });
          }}
        />
      </div>
    );
  }
}

export default CheckedCheckbox