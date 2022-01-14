import React from "react";
import { PRODUCT_DATA } from "./data";
import SearchBar from "./SearchBar";
import ProductTableBody from "./ProductTableBody";

export default class ProductTable extends React.Component {
  constructor(props) {
    super(props);

    this.filteredProducts = this.getFilteredProducts("", false);

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(filterText, inStockOnly) {
    this.filteredProducts = this.getFilteredProducts(filterText, inStockOnly);
  }

  getFilteredProducts(filterText = "", inStockOnly = false) {
    return PRODUCT_DATA.filter((product) => {
      return product.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1
        && (!inStockOnly || product.stocked);
    });
  }

  render() {
    return (
      <div>
        <SearchBar onFilterChange={this.handleFilterChange}/>

        <hr />

        <ProductTableBody products={this.filteredProducts}/>
      </div>
    );
  }
}
