const nodemailer = require("nodemailer");
// const asyncHandler = require("express-async-handler");
const ics = require("ics");
const dotenv = require("dotenv");
const moment = require("moment");

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  secure: true,
  secureConnection: false,
  port: 465,
  auth: {
    user: process.env.HOSTINGER_MAIL,
    pass: process.env.HOSTINGER_PASSWORD,
  },
});

const convertToICSTime = (timestamp) => {
  const date = moment(timestamp);
  return [
    date.year(),
    date.month() + 1,
    date.date(),
    date.hour(),
    date.minute(),
  ];
};

async function sendEmail(email, subject, body, attachment = null) {
  try {
    console.log(email);
    if (attachment) {
      const eventDetails = {
        start: convertToICSTime(attachment),
        duration: { hours: 1 },
        title: "Your Lesson with Swimingo",
        description: "Join us for a swimming session at Swimingo.",
        location: "Swimingo Pool",
        url: "https://www.swimngo.com",
        organizer: { name: "Swimingo", email: "pranavcm602@gmail.com" },
      };
      ics.createEvent(eventDetails, async (error, value) => {
        if (error) {
          console.log(error);
          return;
        }
        const mailOptions = {
          from: process.env.HOSTINGER_MAIL,
          to: email,
          subject: subject,
          html: body,
          attachments: [
            {
              filename: "event.ics",
              content: value,
              contentType: "text/calendar",
            },
          ],
        };
        const info = await transporter.sendMail(mailOptions);
        return info;
      });
    } else {
      const mailOptions = {
        from: process.env.HOSTINGER_MAIL,
        to: email,
        subject: subject,
        html: body,
      };
      const info = await transporter.sendMail(mailOptions);
      return info;
    }
  } catch (error) {
    console.log(error);
    return "500";
  }
}

module.exports = { sendEmail };
