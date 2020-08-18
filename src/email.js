const nodemailer = require('nodemailer');
const credentials = require('../private/email_credentials.json');
const { currentMonth } = require('./date');

const sendEmail = body => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: credentials,
  });

  const mailOptions = {
    from: 'Cloud Angel Notifications<me@gmail.com>',
    to: credentials.user,
    subject: `${currentMonth} Games with Gold`,
    html: body,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
