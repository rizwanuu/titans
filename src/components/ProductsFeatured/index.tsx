import * as React from "react";
import { Link } from "react-router-dom";

import {  ProductListItem } from "..";
import { generateProductUrl, maybe } from "../../core/utils";
import { TypedFeaturedProductsQuery } from "./queries";

import "./scss/index.scss";

interface ProductsFeaturedProps {
  title1?: string;
  subtitle?: string;
}

const ProductsFeatured: React.FC<ProductsFeaturedProps> = ({ title1, subtitle }) => {
  return (
    <TypedFeaturedProductsQuery displayError={false}>
      {({ data }) => {
        const products = maybe(
          () => data.shop.homepageCollection.products.edges,
          []
        );

        if (products.length) {
          return (
            <div className="products-featured">
              <div className="container">
                <h3>{title1}</h3>
                <p>{subtitle}</p>
                <div style={{display: "flex", justifyContent: "space-evenly"}}>
                  {products.map(({ node: product }) => (
                    <Link
                      to={generateProductUrl(product.id, product.name)}
                      key={product.id}
                    >
                      <ProductListItem product={product} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        }
        return null;
      }}
    </TypedFeaturedProductsQuery>
  );
};

ProductsFeatured.defaultProps = {
  title1: "SHOP BY SERIES",
  subtitle: "PICK FROM THE SERIES THAT BEST HITS YOUR NEEDS"
};

export default ProductsFeatured;
