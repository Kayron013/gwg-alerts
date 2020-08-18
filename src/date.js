exports.currentMonth = new Intl.DateTimeFormat('en-US', {
  month: 'long',
}).format(new Date());
