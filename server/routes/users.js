var express = require("express");
var router = express.Router();
var passport = require("passport");
var Users = require("../models/user");
var authenticate = require("../authenticate");

router.post("/signup", (req, res, next) => {
  const { username, email, password, city } = req.body;
  Users.register(
    new Users({ username, email, role: "user", city }),
    password,
    (err, user) => {
      if (err) return next(err);
      user.save(err => {
        if (err) return next(err);
        const token = authenticate.getToken({
          _id: user._id,
          username: user.username,
          role: user.role,
          email: user.email
        });
        res.setHeader("content-type", "application/json");
        res.statusCode = 200;
        res.json({ success: true, message: "Signup successfully", token });
      });
    }
  );
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    console.log(req.body);
    if (err) return next(err);
    if (!user) {
      res.setHeader("content-type", "application/json");
      res.statusCode = 401;
      res.json({ success: false, message: "Login Un successfull", info: info });
      return;
    }
    req.logIn(user, { session: false }, err => {
      if (err) {
        res.setHeader("content-type", "application/json");
        res.statusCode = 401;
        res.json({ success: false, message: "Login Un successfull", err: err });
        return;
      }
      res.setHeader("content-type", "application/json");
      res.statusCode = 200;
      const token = authenticate.getToken({
        _id: user._id,
        role: user.role,
        username: user.username,
        email: user.email
      });
      res.json({ success: true, message: "Login Successfull", token });
    });
  })(req, res, next);
});

module.exports = router;
