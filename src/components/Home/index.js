import React from "react";
import { UserContext } from "../../utils";

export default class Home extends React.Component {
  static contextType = UserContext;

  render() {
    return (
      <div>
        {this.context.name ? (
          <h2>Current Name is {this.context.name}</h2>
        ) : null}
        <h2>Change Player Name: </h2>
        <input
          value={this.context.name}
          type="text"
          onChange={(e) => this.context.setName(e.target.value)}
        />
      </div>
    );
  }
}
