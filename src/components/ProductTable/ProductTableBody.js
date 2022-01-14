import React from "react";

export default class ProductTableBody extends React.Component {
  transformProductList(products) {
    if (!products) {
      return [];
    }

    const categoryList = [];
    products.forEach((product) => {
      const category = categoryList.find(
        (category) => category.name === product.category
      );
      if (category) {
        category.products.push(product);
      } else {
        categoryList.push({
          name: product.category,
          products: [product],
        });
      }
    });
    return categoryList;
  }

  render() {
    const categoryList = this.transformProductList(this.props.products);
    const singleProduct = (product) => (
      <div className="product" style={{ display: "flex" }} key={product.name}>
        <span>{product.name}</span>
        -----------
        <span>{product.price}</span>
      </div>
    );

    return (
      <div>
        <div className="header" style={{ display: "flex" }}>
          <span>Name</span>
          -----------
          <span>Price</span>
        </div>
        <div className="body">
          {categoryList.map((category) => (
            <div className="category" key={category.name}>
              <span className="category-name">{category.name}</span>
              <div className="product-list">
                {category.products.map((product) => singleProduct(product))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
