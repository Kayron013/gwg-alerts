const nodemailer = require('nodemailer');
const credentials = require('../private/email_credentials.json');
const { current_month } = require('../index');

const sendEmail = body => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: credentials
  });

  const mailOptions = {
    from: 'Cloud Angel',
    to: credentials.user,
    subject: `${current_month} Games with Gold`,
    html: body
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
