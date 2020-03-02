var createError = require("http-errors");
var express = require("express");
var config = require("./config");
var mongoose = require("mongoose");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const fs = require("fs");

console.log(path.resolve(__dirname,"/uploads/e381731b9289ecc26e783cb3aa22ce7d"))
// Db connection
mongoose.connect(config.dbUrl, { useNewUrlParser: true }, err => {
  if (err) return console.log(err);
  console.log("DB connected");
});


var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var messageRouter = require("./routes/messages");
var orderConfirmationRouter = require("./routes/orderConfirmation");
const productRouter = require('./routes/product')
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.static('./'))

app.use("/", indexRouter);
app.use("/products", productRouter);
app.use("/users", usersRouter);
app.use("/messages",messageRouter);
app.use("/orderConfirmation", orderConfirmationRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  console.log(err);
  // render the error page
  res.status(err.status || 500);
  res.json(err);
});





module.exports = app;
