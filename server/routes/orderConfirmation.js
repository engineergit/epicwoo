const express = require("express");
const Router = express.Router();
const authenticate = require("../authenticate");
const SendMail = require("../sendMail");

const totalItems = items => {
  let qan = 0;
  console.log(items);
  items.forEach(p => {
    qan = qan + p.quantity;
  });
  return qan;
};

const totalPrice = items => {
  let price = 0;
  items.forEach(p => {
    price = price + p.price * p.quantity;
  });
  return price;
};

Router.route("/").post(authenticate.verifyUser, (req, res, next) => {
  const to = "ars3753669@gmail.com";
  let cartTable = req.body.map(item => {
    return `<tr><td>${item.name}</td><td>${item.quantity}</td><td>${
      item.price
    }</td></tr>`;
  });

  const body = `<h2>User Email : ${req.user.email}</h2>
                 <h3>User Name : ${req.user.username}</h3>
                 <h2>Cart Information</h2>
                 <table border='1'>
                 <thead><tr><th>Product Name</th><th>Quantity</th><th>Price</th></tr></thead>
                 <tbody>${cartTable.join("")}</tbody>
                 </table>
                 <h3>Total Items : ${totalItems(req.body)}</h3>
                 <h3>Total Price : ${totalPrice(req.body)}</h3>
  `;
  SendMail(to, "Order Confirmation", body, res, next);
});

module.exports = Router;
