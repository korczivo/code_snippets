const relative = new Intl.RelativeTimeFormat('en', { style: 'long', numeric: 'auto' });

relative.format(4, 'day') // in 4 days
relative.format(6, 'day') // in 6 days
relative.format(1, 'day') // tomorrow
relative.format(-3, 'day') // 3 days ago
relative.format(-1, 'day') // yesterday
relative.format(100, 'year') // in 100 years
relative.format(-1, 'year') // last year
relative.format(0, 'year') // this year
relative.format(1, 'year') // next year
relative.format(-20, 'second') // 20 seconds ago
relative.format(-5, 'second') // 5 seconds ago
relative.format(10, 'second') // in 10 seconds
