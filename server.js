const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const {
  signup,
  resetpassword,
  customerbooking,
  instructorbooking,
} = require("./htmlDoc");

const { sendEmail } = require("./sendmail");

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/send-mail", (req, res) => {
  sendEmail(
    "pranavcm212005@gmail.com",
    "Your Lesson Has Been Scheduled",
    instructorbooking,
    "2021-08-25T10:00:00Z"
  );
  res.send("Email sent");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
