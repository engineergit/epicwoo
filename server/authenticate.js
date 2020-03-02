const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Users = require("./models/user");
const jwtStrategy = require("passport-jwt").Strategy;
const extractJwt = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");
const config = require("./config");

// Authenticate by local strategy for the first time
passport.use(new LocalStrategy(Users.authenticate()));

// Authenticate by jwt strategy
passport.use(
  new jwtStrategy(
    {
      jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.secret
    },
    (payload, done) => {
      Users.findById(payload._id, (err, user) => {
        if (err) return done(err);
        done(null, user);
      });
    }
  )
);

// get tokken
module.exports.getToken = (user, expiresIn = 3600) =>
  jwt.sign(user, config.secret, { expiresIn: expiresIn });

// verify user
module.exports.verifyUser = passport.authenticate("jwt", { session: false });
module.exports.verifyAdmin = (req, res, next) => {
  if (req.user.role === "admin") return next();
  res.setHeader("content-type", "application/json");
  res.statusCode = 403;
  res.json({
    success: false,
    message: "Your are not authenticated to perform this action"
  });
};
