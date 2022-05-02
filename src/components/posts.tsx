import * as React from "react";
import Product from "./product";
import { ProductData } from "../types";

interface Props {
  products: ProductData[];
  setFav: (numFav: number) => void;
  numFav: number;
}

const Posts: React.FC<Props> = ({ products, setFav, numFav }) => {
  return (
    <>
      {products
        .slice(0)
        .reverse()
        .map((product, index) => (
          <Product
            key={index}
            product={product}
            setFav={setFav}
            numFav={numFav}
          />
        ))}
    </>
  );
};

export default Posts;
