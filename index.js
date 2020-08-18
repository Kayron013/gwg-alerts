const generateEmail = require('./src/email_template');
const findGames = require('./src/find_games');
const sendEmail = require('./src/email');

const main = async () => {
  try {
    const games = await findGames();
    const email_body = await generateEmail(games);
    await sendEmail(email_body);
    console.log('email sent');
    return 'success';
  } catch (e) {
    console.log(e);
    return 'error';
  }
};

exports.handler = main;
