function parseNumber(number) {
  const pr = new Intl.PluralRules('en-US', {type: 'ordinal'});

  const ordinals = {
    one: 'st',
    two: 'nd',
    few: 'rd',
    many: 'th',
    zero: 'th',
    other: 'th',
  };

  return `${number}${ordinals[pr.select(number)]}`
};

console.log(parseNumber(1)); // 1st
console.log(parseNumber(2)); // 2nd
console.log(parseNumber(3)); // 3rd
console.log(parseNumber(4)); // 4th
console.log(parseNumber(10)); // 10th
