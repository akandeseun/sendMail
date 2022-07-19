const express = require("express");
// const nodemailer = require("nodemailer");
const sendMailRoute = require("./routes/sendMail");

const app = express();

app.use(express.json());
app.use("/", sendMailRoute);
app.get("/success/:token", (req, res) => {
  res.send("Email Verified successfully");
});

const port = 3000;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
