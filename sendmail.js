const nodemailer = require("nodemailer");
const ics = require("ics");
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "pranavcm602@gmail.com",
    pass: process.env.APP_PASSWORD,
  },
});

const htmlcode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Password</title>
    <style>
        body, table, td, a {
            text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }
        table, td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
        }
        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }
        div[style*="margin: 16px 0;"] {
            margin: 0 !important;
        }
    </style>
</head>
<body style="margin: 0; padding: 0; font-family: 'Plus Jakarta Sans', Arial, sans-serif;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td bgcolor="#fff" align="center" style="padding: 20px;">
                <img src="https://www.swimngo.com/wp-content/uploads/2019/10/logo.jpg" alt="logo" style="width: 130px;">
            </td>
        </tr>
        <tr>
            <td align="center" style="padding: 50px 15px; background-color: #ffffff;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 550px;">
                    <tr>
                        <td bgcolor="#E0F3FC" align="center" style="padding: 20px; border-radius: 10px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); text-align: center;">
                            <h1 style="color: #2F489C; margin: 0;">
                                Booking Confirmation
                            </h1>
                            <p style="margin-top: 20px; color: black; font-size: 10px;">
                                Thank you for your booking! We are pleased to confirm your reservation.
                            </p>
                            <a href="/" style="display: inline-block; background-color: #2F489C; color: white; padding: 10px 20px; border: none; border-radius: 50px; cursor: pointer; font-size: 15px; text-decoration: none; margin-top: 10px;">
                                View Booking
                            </a>
                            <p style="margin-top: 40px; color: black; font-size: 10px;">
                                If you have any questions or need to make changes to your booking, please contact us by clicking below button.                            </p>
                            <a href="/" style="display: inline-block; background-color: #2F489C; color: white; padding: 10px 20px; border: none; border-radius: 50px; cursor: pointer; font-size: 15px; text-decoration: none; margin-top: 10px;">
                                Contact Us
                            </a>
            
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`;
const sendCalenderMail = (eventDetails, emailOptions) => {
  ics.createEvent(eventDetails, (error, value) => {
    if (error) {
      console.log(error);
      return;
    }

    const mailOptions = {
      from: {
        name: "Pranav CM",
        address: "pranavcm602@gmail.com",
      },
      to: emailOptions.to,
      subject: emailOptions.subject,
      html: htmlcode,
      attachments: [
        {
          filename: "event.ics",
          content: value,
          contentType: "text/calendar",
        },
      ],
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  });
};

module.exports = sendCalenderMail;
