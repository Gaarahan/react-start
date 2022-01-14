import React from "react";

export default class TempatrueInput extends React.Component {
  render() {
    return (
      <div>
        <input
          id="tempatrue"
          type="number"
          value={this.props.temperature}
          onChange={(e) => this.props.onTemperatureChange(e.target.value)}
        />
        <label htmlFor="tempatrue"> - {this.props.scale}</label>
      </div>
    );
  }
}
