const ejs = require('ejs');
const { current_month } = require('../index');

const generate = games =>
  ejs.render(
    `
<h2>${current_month} Games</h2>
<hr/>
<h3>Xbox 360</h3>
<table>
  <thead>
    <tr><th rowspan=2>Game</th><th colspan=2>Availability</th></tr>
    <tr><th>From</th><th>To</th></tr>
  </thead>
  <tbody>
    <% for(game of games.x360) { %>
      <tr>
        <td>
        <% if(game.link){ %>
          <a href="<%= game.link %>"><%= game.title %></a>
        <% } else{ %>
          <%= game.title %>
        <% } %>
        </td>
        <td><%= game.availability.from %></td>
        <td><%= game.availability.to %></td>
      </tr>
    <% } %>
  </tbody>
</table>
<h3>Xbox One</h3>
<table>
  <thead>
    <tr><th rowspan=2>Game</th><th colspan=2>Availability</th></tr>
    <tr><th>From</th><th>To</th></tr>
  </thead>
  <tbody>
    <% for(game of games.x1) { %>
      <tr>
        <td>
        <% if(game.link){ %>
          <a href="<%= game.link %>"><%= game.title %></a>
        <% } else{ %>
          <%= game.title %>
        <% } %>
        </td>
        <td><%= game.availability.from %></td>
        <td><%= game.availability.to %></td>
      </tr>
    <% } %>
  </tbody>
</table>
`,
    { games }
  );

module.exports = generate;
