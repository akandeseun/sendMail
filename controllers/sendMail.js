const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const sendMail = async (req, res) => {
  const { email } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "destany.klocko84@ethereal.email",
      pass: "fEXr21wtgSQtnsKjpz",
    },
  });

  const token = jwt.sign({ email }, "secret", { expiresIn: "10d" });

  const info = await transporter.sendMail({
    to: email,
    from: "destany.klocko84@ethereal.email",
    subject: "Does it work?",
    html: `click <a href="localhost:3000/success/${token}" target="_blank">here</a>`,
  });
  res.status(200).json({
    msg: "Mail Sent",
    info,
  });
};

module.exports = sendMail;
