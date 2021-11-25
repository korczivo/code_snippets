const now = new Date();

new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(now) // Saturday, December 4, 2021
new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(now) // December 4, 2021
new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(now) // Dec 4, 2021
new Intl.DateTimeFormat('en-US', { dateStyle: 'short' }).format(now) // 12/4/21
