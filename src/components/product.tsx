import * as React from "react";
import { FaStar } from "react-icons/fa";
import { ProductData } from "../types";
import styles from "../styles/product.module.css";

interface Props {
  product: ProductData;
  setFav: (numFav: number) => void;
  numFav: number;
}

const Product: React.FC<Props> = ({ product, setFav, numFav }) => {
  return (
    <span
      className={styles.product}
      style={{
        display: "inline-block",
        overflowWrap: "break-word",
        float: "none",
        clear: "both",
      }}
    >
      <span className={styles.productTitle}>{product.title}</span>

      <p>
        <strong>
          Rating: {product.rating ? `${product.rating.rate}/5` : ""}
        </strong>
      </p>

      <p>
        <b>Price: ${+product.price}</b>
      </p>

      <p className={styles.productBody}>
        <span>
          <b>Description:</b>
        </span>
        <br />
        {product.description}
      </p>

      <span
        className={styles.actionBar}
        style={{ display: "table", width: "100%" }}
      >
        <span
          className={`${styles.actionBarItem} ${
            product.isFavorite ? "active" : ""
          }`}
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
          <span className={styles.actionBarItemLabel}>
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
