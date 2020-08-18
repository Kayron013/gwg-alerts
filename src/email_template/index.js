const ejs = require('ejs');
const { currentMonth } = require('../date');
const path = require('path');

const generateEmail = games => ejs.renderFile(path.join(__dirname, './email.ejs'), { games, currentMonth });
module.exports = generateEmail;
