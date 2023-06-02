import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Black tshirt",
    image: "https://i.postimg.cc/Df6BZSsW/MS1925-A-2.jpg",
    brand: "levis",
    price: "5000",
    categoryName: "men",
    rating:5
  },
  {
    _id: uuid(),
    title: "Pink tshirt",
    image: "https://i.postimg.cc/Gmgg9zDX/LS3712-B-2.jpg",
    brand: "h&m",
    price: "4000",
    categoryName: "women",
    rating:4
  },
  {
    _id: uuid(),
    title: "White shirt",
    image: "https://i.postimg.cc/v8vzc3F5/MS3773-A-1.jpg",
    brand: "arrow",
    price: "3000",
    categoryName: "men",
    rating:3
  },
  
  {
    _id: uuid(),
    title: "White shirt",
    image: "https://i.postimg.cc/Df6BZSsW/MS1925-A-2.jpg",
    brand: "arrow",
    price: "2000",
    categoryName: "men",
    rating:2
  },
  {
    _id: uuid(),
    title: "White shirt",
    image: "https://i.postimg.cc/Df6BZSsW/MS1925-A-2.jpg",
    brand: "arrow",
    price: "1000",
    categoryName: "men",
    rating:1
  },
  {
    _id: uuid(),
    title: "Pink tshirt",
    image: "https://i.postimg.cc/Df6BZSsW/MS1925-A-2.jpg",
    brand: "h&m",
    price: "4000",
    categoryName: "women",
    rating:4
  },
];
