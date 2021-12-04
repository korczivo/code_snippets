const fruits = ['apple', 'orange', 'banana', 'pineapple'];

const list_with_and = new Intl.ListFormat('en');

list_with_and.format(fruits);
// 'apple, orange, banana, and pineapple'

const list_with_or = new Intl.ListFormat('en', { type: 'disjunction' });

list_with_or.format(fruits);
// 'apple, orange, banana, or pineapple'

new Intl.ListFormat("pl").format(['jabłko', 'pomarańcza', 'banan', 'ananas']);
// 'jabłko, pomarańcza, banan i ananas'
