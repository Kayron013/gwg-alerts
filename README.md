# gwg-alerts
A script for notifying, through email, which Xbox games are available through Games with Gold each month.
Configured to be used as an AWS lambda function for a cron job.

Sends an email containing two tables, one for Xbox 360 games, one for Xbox One games.
The tables include, for each game, the title, a link to the game's Wikipedea page, if it exists, or a google search for the title, and its availability.
