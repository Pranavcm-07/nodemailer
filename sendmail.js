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

const signup = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
    <style>
        body, table, td, a {
            text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
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
                <img src="cid:postlogo" alt="logo" style="width: 130px;">
            </td>
        </tr>
        <tr>
            <td align="center" style="padding: 50px 15px; background-color: #ffffff;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 550px;">
                    <tr>
                        <td bgcolor="#E0F3FC" align="center" style="padding: 20px; border-radius: 10px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); text-align: center;">
                            <h1 style="color: #2F489C; margin: 0;">
                                Thanks for signing up with Swimingo!
                            </h1>
                            <p style="margin-top: 20px; color: black; font-size: 10px;">
                                We're just dropping by your inbox to let you know that your account's
                                active and ready for you to start your swimming journey with us.
                            </p>
                            <a href="/" style="display: inline-block; background-color: #2F489C; color: white; padding: 10px 20px; border: none; border-radius: 50px; cursor: pointer; font-size: 17px; text-decoration: none; margin-top: 40px;">
                                Get Started
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

const resetpassword = `
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
                <img src="cid:postlogo" alt="logo" style="width: 130px;">
            </td>
        </tr>
        <tr>
            <td align="center" style="padding: 50px 15px; background-color: #ffffff;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 550px;">
                    <tr>
                        <td bgcolor="#E0F3FC" align="center" style="padding: 20px; border-radius: 10px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); text-align: center;">
                            <h1 style="color: #2F489C; margin: 0;">
                                Reset Password
                            </h1>
                            <p style="margin-top: 20px; color: black; font-size: 10px;">
                                Hello Swimingo user,
                                We received a request to reset your password for your Swimingo account.
                            </p>
                            <p style="margin-top: 20px; color: black; font-size: 10px;">
                                Click the button below to reset your password.
                            </p>
                            <a href="/" style="display: inline-block; background-color: #2F489C; color: white; padding: 10px 20px; border: none; border-radius: 50px; cursor: pointer; font-size: 15px; text-decoration: none; margin-top: 40px;">
                                Reset Password
                            </a>
                            <p style="margin-top: 20px; color: black; font-size: 10px;">
                                If you did not request a password reset, please ignore this email or contact support if you have questions.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`;

const customerbooking = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Confirmation</title>
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
                <img src="cid:postlogo" alt="logo" style="width: 130px;">
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
                                We are pleased to inform you that your lesson has been successfully scheduled. Thank you for booking with us.
                            </p>
                            <a href="/" style="display: inline-block; background-color: #2F489C; color: white; padding: 10px 20px; border: none; border-radius: 50px; cursor: pointer; font-size: 15px; text-decoration: none; margin-top: 10px;">
                                View Booking
                            </a>
                            <p style="margin-top: 40px; color: black; font-size: 10px;">
                                If you need to make any changes to your scheduled lesson, you can edit it through your dashboard on your Swimingo account.                            
                            </p>
                            <a href="/" style="display: inline-block; background-color: #2F489C; color: white; padding: 10px 20px; border: none; border-radius: 50px; cursor: pointer; font-size: 15px; text-decoration: none; margin-top: 10px;">
                                Edit Booking
                            </a>
                            <p style="margin-top: 40px; color: black; font-size: 10px;">
                                If you have any questions or need assistance, please feel free to contact our support team.                            </p>
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

const instructorbooking = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Confirmation</title>
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
                <img src="cid:postlogo" alt="logo" style="width: 130px;">
            </td>
        </tr>
        <tr>
            <td align="center" style="padding: 50px 15px; background-color: #ffffff;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 550px;">
                    <tr>
                        <td bgcolor="#E0F3FC" align="center" style="padding: 20px; border-radius: 10px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); text-align: center;">
                            <h1 style="color: #2F489C; margin: 0;">
                                Booking Information
                            </h1>
                            <p style="margin-top: 20px; color: black; font-size: 10px;">
                                We are pleased to inform you that a new lesson has been booked with you. You can view the details of the scheduled lesson on your instructor dashboard on the Swimingo platform.
                            </p>
                            <a href="/" style="display: inline-block; background-color: #2F489C; color: white; padding: 10px 20px; border: none; border-radius: 50px; cursor: pointer; font-size: 15px; text-decoration: none; margin-top: 10px;">
                                View Lesson Details
                            </a>
                            <p style="margin-top: 40px; color: black; font-size: 10px;">
                                Please make sure to be prepared and available at the scheduled time.                            
                            </p>
                            <p style="margin-top: 40px; color: black; font-size: 10px;">
                                If you have any questions or need assistance, please feel free to contact our support team.                       
                            </p>
                            <a href="/" style="display: inline-block; background-color: #2F489C; color: white; padding: 10px 20px; border: none; border-radius: 50px; cursor: pointer; font-size: 15px; text-decoration: none; margin-top: 10px;">
                                Contact Us
                            </a>
                            <p style="margin-top: 40px; color: black; font-size: 10px;">
                                Thank you for being a valued instructor on the Swimingo platform.                       
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`;

const sendCalenderMail = (eventDetails, emailOptions, role, action) => {
  if (action === "booking") {
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
        subject:
          role === "customer"
            ? emailOptions.subject.customer
            : emailOptions.subject.instructor,
        html: role === "customer" ? customerbooking : instructorbooking,
        attachments: [
          {
            filename: "event.ics",
            content: value,
            contentType: "text/calendar",
          },
          {
            filename: "Post Logo.png",
            path: "C:/Users/prana/OneDrive/Documents/web development/swimngo/nodemailer-implementation/Post Logo.png",
            cid: "postlogo",
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
  } else {
    const mailOptions = {
      from: {
        name: "Pranav CM",
        address: "pranavcm602@gmail.com",
      },
      to: emailOptions.to,
      subject:
        action === "signup" ? "Welcome to Swimingo" : "Reset Your Password",
      html: action === "signup" ? signup : resetpassword,
      attachments: [
        {
          filename: "Post Logo.png",
          path: "Post Logo.png",
          cid: "postlogo",
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
  }
};

module.exports = sendCalenderMail;
