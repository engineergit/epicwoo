const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const config = require("./config");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  config.google.clientId, //client id
  config.google.clientSecret, // Client Secret
  config.google.redirectUri // Redirect URL
);
oauth2Client.setCredentials({
  refresh_token: config.google.refreshToken
});

const SendMail = async (to, subject, body, res, next) => {
  let handleErorr = undefined;
  const tokens = await oauth2Client
    .refreshAccessToken()
    .catch(err => (handleErorr = err));
  if (handleErorr) return next(handleErorr);
  const accessToken = tokens.credentials.access_token;
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "aamirjuttt669@gmail.com",
      clientId: config.google.clientId,
      clientSecret: config.google.clientSecret,
      refreshToken: config.google.refreshToken,
      accessToken: accessToken
    }
  });

  const mailOptions = {
    from: "Epic Woo",
    to: to,
    subject: subject,
    html: body
  };

  smtpTransport.sendMail(mailOptions, (err, response) => {
    if (err) return next(err);

    res.setHeader("content-type", "application/json");
    res.statusCode = 200;
    res.json({ success: true, message: "Order Sent To Store" });

    smtpTransport.close();
  });
};

module.exports = SendMail;
