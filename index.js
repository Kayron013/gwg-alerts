exports.current_month = new Intl.DateTimeFormat('en-US', {
  month: 'long',
}).format(new Date());

const email_template = require('./modules/email_template');
const findGames = require('./modules/find_games');
const sendEmail = require('./modules/email');

const main = async () => {
  try {
    const games = await findGames();
    const email_body = email_template(games);
    await sendEmail(email_body);
    console.log('email sent');
  } catch (e) {
    console.log(e);
  }
};

exports.handler = main;

//main();
