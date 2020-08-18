const fetch = require('node-fetch');
const parser = require('fast-html-parser');

const findGames = async () => {
  const url = 'https://en.everybodywiki.com/List_of_Games_with_Gold_games';
  const page = await fetch(url)
    .then(res => res.text())
    .then(body => body)
    .catch(e => {
      console.error(e);
      process.exit(1);
    });

  const dom = parser.parse(page);
  const [x360_tbl, x1_tbl] = dom.querySelectorAll('.wikitable');
  const x360_games = getGamesFromTable(x360_tbl);
  const x1_games = getGamesFromTable(x1_tbl);
  return { x360: x360_games, x1: x1_games };
};

/**
 *
 * @param {parser.HTMLElement} table
 * @returns {Games} games from last two rows of `table`
 */
const getGamesFromTable = table => {
  const rows = table.querySelectorAll('tr');
  const length = rows.length;
  const row1 = rows[length - 2].querySelectorAll('td');
  const game1 = {
    title: row1[1].rawText.trim(),
    availability: { from: row1[2].rawText.trim(), to: row1[3].rawText.trim() },
    link: getGameLink(row1[1]),
  };
  const row2 = rows[length - 1].querySelectorAll('td');
  const game2 = {
    title: row2[1].rawText.trim(),
    availability: { from: row2[2].rawText.trim(), to: row2[3].rawText.trim() },
    link: getGameLink(row2[1]),
  };

  return [game1, game2];
};

/**
 *
 * @param {parser.HTMLElement} td
 * @returns wiki link to game, if exists, else, google search link
 */
const getGameLink = td => {
  const anchor = td.querySelector('a');
  if (anchor && anchor.href) {
    return `https://en.wikipedia.org${anchor.href}`;
  }
  const title = td.querySelector('i').childNodes[0].rawText;
  return `https://google.com/search?q=${encodeURIComponent(title)}`;
};

module.exports = findGames;

/**
 * @typedef {{title: string, availability: {from: string, to: string}, link: string}} Game
 * @typedef {{x360: Game[], x1: Game[]}} Games
 */
