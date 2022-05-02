import * as React from "react";
import { FaStar } from "react-icons/fa";
import { ProductData } from "../types";
import styles from "./product.module.css";

interface Props {
  product: ProductData;
  setFav: (numFav: number) => void;
  numFav: number;
}

const Product: React.FC<Props> = ({ product, setFav, numFav }) => {
  const {
    product: productClass,
    productBody,
    actionBarItem,
    actionBarItemLabel,
  } = styles;

  // Problem: Now product title can be too long, I just put overflowX as fix now
  return (
    <span
      className={productClass}
      style={{
        display: "inline-block",
        overflowX: "scroll",
        float: "none",
        clear: "both",
      }}
    >
      <span className={styles["product-title"]} style={{ overflowX: "hidden" }}>
        {product.title}
      </span>

      <p>
        <strong>
          Rating: {product.rating ? `${product.rating.rate}/5` : ""}
        </strong>
      </p>

      <p>
        <b>Price: ${+product.price}</b>
      </p>

      <p className={productBody}>
        <span>
          <b>Description:</b>
        </span>
        <br />
        {product.description}
      </p>

      <span
        className={styles["action_bar"]}
        style={{ display: "table", width: "100%" }}
      >
        <span
          className={`${actionBarItem} ${product.isFavorite ? "active" : ""}`}
          role="button"
          onClick={() => {
            if (!product.isFavorite == null || product.isFavorite) {
              setFav(numFav - 1);
              product.isFavorite = false;
            } else {
              setFav(numFav + 1);
              product.isFavorite = true;
            }
          }}
        >
          <FaStar />{" "}
          <span className={actionBarItemLabel}>
            {!!!!product.isFavorite
              ? "Remove from favorites"
              : "Add to favorites"}
          </span>
        </span>
      </span>
    </span>
  );
};

export default Product;
