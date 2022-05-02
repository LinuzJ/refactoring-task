import * as React from "react";
import { useState, useEffect } from "react";
import lodash from "lodash";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import Button from "./components/button";
import Posts from "./components/posts";
import Form from "./components/form";
import logo from "./images/droppe-logo.png";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import styles from "./App.module.css";
import { ProductData } from "./types";

const ShopApp: React.FC = () => {
  // Init states
  const [products, setProducts] = useState<ProductData[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isShowingMessage, setisShowingMessage] = useState<boolean>(false);
  const [numFavorites, setNumFavorites] = useState<number>(0);
  const [prodCount, setProdCount] = useState<number>(0);

  // Fetch products only when mounting
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((response) => {
      let jsonResponse = response.json();

      jsonResponse.then((rawData) => {
        setProducts(rawData);
        setProdCount(rawData.length);
      });
    });
  }, []);

  const handleSubmit = (payload: {
    title: string;
    description: string;
    price: string;
  }) => {
    const updated = lodash.clone(products);
    updated.push({
      title: payload.title,
      description: payload.description,
      price: Number(payload.price),
    });

    setProducts([
      ...products,
      {
        title: payload.title,
        description: payload.description,
        price: Number(payload.price),
      },
    ]);
    setProdCount(prodCount + 1);
    setIsOpen(false);
    setisShowingMessage(false);

    // **this POST request doesn't actually post anything to any database**
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: payload.title,
        price: payload.price,
        description: payload.description,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        setisShowingMessage(false);
      });
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={["container", styles.headerImageWrapper].join(" ")}>
          <img src={logo} className={styles.headerImage} />
        </div>
      </div>

      <>
        <span
          className={["container", styles.main].join(" ")}
          style={{
            margin: "50px inherit",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <img src={img1} style={{ maxHeight: "15em", display: "block" }} />
          <img src={img2} style={{ maxHeight: "15rem", display: "block" }} />
        </span>
      </>

      <div
        className={["container", styles.main].join(" ")}
        style={{ paddingTop: 0 }}
      >
        <div className={styles.buttonWrapper}>
          <span role="button">
            <Button onClick={handleClick}>Send product proposal</Button>
          </span>
          {isShowingMessage && (
            <div className={styles.messageContainer}>
              <i>{"Adding product..."}</i>
            </div>
          )}
        </div>

        <div className={styles.statsContainer}>
          <span>Total products: {prodCount}</span>
          {" - "}
          <span>Number of favorites: {numFavorites}</span>
        </div>

        {products && !!products.length ? (
          <Posts
            products={products}
            setFav={setNumFavorites}
            numFav={numFavorites}
          />
        ) : (
          <div></div>
        )}
      </div>

      <>
        <Modal
          isOpen={isOpen}
          className={styles.reactModalContent}
          overlayClassName={styles.reactModalOverlay}
        >
          <div className={styles.modalContentHelper}>
            <div className={styles.modalClose} onClick={handleClick}>
              <FaTimes />
            </div>

            <Form onSubmit={handleSubmit} />
          </div>
        </Modal>
      </>
    </>
  );
};

export default ShopApp;
