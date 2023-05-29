import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Black tshirt",
    image: "https://postimg.cc/yWJFpYLB",
    brand: "levis",
    price: "5000",
    categoryName: "men",
    rating:4
  },
  {
    _id: uuid(),
    title: "Pink tshirt",
    image: "https://postimg.cc/yWJFpYLB",
    brand: "h&m",
    price: "3000",
    categoryName: "women",
    rating:5
  },
  {
    _id: uuid(),
    title: "White shirt",
    image: "https://postimg.cc/yWJFpYLB",
    brand: "arrow",
    price: "1000",
    categoryName: "men",
    rating:3
  },
];
