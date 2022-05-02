import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ShopApp from "../App";
/*
This test checks if the app correctly displays the items fetched from the API.
In this test we isolate ourself and use our own mock return data simulating a response
from the API.

*/
// Fake data
const fakeProductData = [
  {
    id: 1,
    title: "first-item",
    price: 10.1,
    description: "Item used for testing",
    category: "test items",
    rating: {
      rate: 2.0,
      count: 111,
    },
    isFavorite: false,
  },
  {
    id: 2,
    title: "sexond-item",
    price: 10.1,
    description: "Item used for testing",
    category: "test items",
    rating: {
      rate: 2.0,
      count: 111,
    },
    isFavorite: false,
  },
];
let container: any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Renders fetched product data", async () => {
  // Replace the fetching function's response with our mock data
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeProductData),
    })
  ) as jest.Mock;

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<ShopApp />, container);
  });

  // Check that the rendered elements match our mock data
  expect(container.querySelector(".productTitle").textContent).toBe(
    fakeProductData[fakeProductData.length - 1].title
  );
  expect(container.querySelector(".productBody").textContent).toBe(
    "Description:" + fakeProductData[fakeProductData.length - 1].description
  );
});
