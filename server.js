const express = require("express");
const bodyParser = require("body-parser");
const sendCalenderMail = require("./sendmail");
const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const details = {
  eventDetails: {
    start: [2024, 7, 1, 10, 0],
    duration: { hours: 1 },
    title: "Swimming Session",
    description: "Join us for a swimming session at SwimNGo.",
    location: "SwimNGo Pool",
    url: "https://www.swimngo.com",
    geo: { lat: 51.525, lon: -0.082 },
    organizer: { name: "SwimNGo", email: "pranavcm602@gmail.com" },
    attendees: [{ name: "Pranav CM", email: "pranavcm212005@gmail.com" }],
  },
  emailOptions: {
    to: "pranavcm212005@gmail.com",
    subject: "Testing Nodemailer",
  },
};

app.get("/send-mail", (req, res) => {
  const eventDetails = details.eventDetails;
  const emailOptions = details.emailOptions;

  sendCalenderMail(eventDetails, emailOptions);
  res.send("Mail sent successfully");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
