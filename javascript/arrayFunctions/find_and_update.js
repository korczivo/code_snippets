const item = {
  id: 2,
  newField: 'value'
};

const items = [{ id: 1 }, { id: 2 }, { id: 3 }];

const foundIndex = items.findIndex(x => x.id === item.id);
items[foundIndex] = item;

console.log(items) // [ { id: 1 }, { id: 2, newField: 'value' }, { id: 3 } ]



