import React from "react";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.filterEleRef = React.createRef();
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => this.props.onFilterChange(e.target.value)}
          ref={this.filterEleRef}
        />

          <label>
            <input
              type="checkbox"
              onChange={(e) =>
                this.props.onFilterChange(
                  this.filterEleRef.current.value,
                  e.target.checked
                )
              }
            />
            <span>Only show products in stock</span>
          </label>
      </div>
    );
  }
}
