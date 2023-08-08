import Product from "./models/Product";

const products: Product[] = [
  {
    name: "rice",
    price: 4,
  },
  {
    name: "cake",
    price: 8,
  },
  {
    name: "cheese",
    price: 2,
  },
];

export const calcAverageProductPrice = (array: Product[]): number => {
  if (array.length) {
    return array.reduce((ac, cv) => ac + cv.price, 0) / array.length;
  } else {
    return 0;
  }
};
