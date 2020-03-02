import jwt from "jsonwebtoken";

export const verifyToken = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  const decodedToken = jwt.decode(token);
  if (decodedToken.exp > Date.now() / 1000) return decodedToken;
  return null;
};
export const baseUrl = "http://localhost:5000/";

 export const Products = [
  {
    id: 6,
    name: "p-6",
    img1:
      "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-60.jpg",
    price: "200"
  },
  {
    id: 7,
    name: "p-7",
    img1:
      "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-32-1.jpg",
    price: "1000"
  },
  {
    id: 8,
    name: "p-8",
    img1:
      " https://epicwoo.com/demo/wp-content/uploads/2018/05/product-80.jpg",
    price: "900"
  },
  {
    id: 9,
    name: "p-9",
    img1:
      "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-34-1-350x340.jpg",
    price: "700"
  },
  {
    id: 10,
    name: "p-10",
    img1:
      "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-34-1-350x340.jpg",
    price: "300"
  },
  {
    id: 16,
    name: "p-16",
    img1:
      "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-39-350x340.jpg",
    price: "200"
  },
  {
    name: "p-17",
    id: 17,
    img1:
      "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-60.jpg",
    price: "1000"
  },
  {
    name: "p-18",
    id: 18,
    img1:
      " https://epicwoo.com/demo/wp-content/uploads/2018/05/product-35-1-350x340.jpg",
    price: "900"
  },
  {
    name: "p-19",
    id: 19,
    img1:
      "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-34-1-350x340.jpg",
    price: "700"
  },
  {
    name: "p-20",
    id: 20,
    img1:
      "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-28-150x150.jpg",
    price: "300"
  },
  {
    id: 21,
    name: "p-21",
    img1:
      "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-60.jpg",
    price: "200"
  },
  {
    name: "p-22",
    id: 22,
    img1:
      "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-32-1.jpg",
    price: "1000"
  },
  {
    name: "p-23",
    id: 23,
    img1:
      " https://epicwoo.com/demo/wp-content/uploads/2018/05/product-80.jpg",
    price: "900"
  },
  {
    name: "p-24",
    id: 24,
    img1:
      "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-34-1-350x340.jpg",
    price: "700"
  },
  {
    name: "p-25",
    id: 25,
    img1:
      "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-34-1-350x340.jpg",
    price: "300"
  }
]
