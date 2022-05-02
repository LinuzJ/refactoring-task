import * as React from "react";
import lodash from "lodash";

import { Product } from "./product";
import { ProductData } from "../types";

interface Props {
  products: ProductData[];
  onFav: (title: string) => void;
}

const Posts: React.FC<Props> = ({ products, onFav }) => {
  return (
    <>
      {products
        .slice(0)
        .reverse()
        .map((product, index) => (
          <Product key={index} index={index} product={product} onFav={onFav} />
        ))}
    </>
  );
};

export default Posts;
