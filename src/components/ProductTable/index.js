import React, { Suspense } from "react";
import { PRODUCT_DATA } from "./data";
import SearchBar from "./SearchBar";

const ProductTableBody = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./ProductTableBody"));
    }, 1000);
  });
});

export default class ProductTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredProducts: this.getFilteredProducts("", false)
    }

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(filterText, inStockOnly) {
    this.setState({
      filteredProducts: this.getFilteredProducts(filterText, inStockOnly)
    });
  }

  getFilteredProducts(filterText = "", inStockOnly = false) {
    return PRODUCT_DATA.filter((product) => {
      return (
        product.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1 &&
        (!inStockOnly || product.stocked)
      );
    });
  }

  render() {
    return (
      <div>
        <SearchBar onFilterChange={this.handleFilterChange} />

        <br />

        <Suspense fallback={<div>test</div>}>
          <ProductTableBody products={this.state.filteredProducts} />
        </Suspense>
      </div>
    );
  }
}
