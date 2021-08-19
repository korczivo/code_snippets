const a = [{
  id: 1, name: "Jamsheer"
}, {
  id: 2, name: "Muhammed"
}, {
  id: 3, name: "Ravi"
}, {
  id: 4, name: "Ajmal"
}, {
  id: 5, name: "Ryan"
}]

const b = [{
  id: 1, name: "Jamsheer"
}, {
  id: 2, name: "Muhammed"
}, {
  id: 3, name: "Ravi"
}, {
  id: 4, name: "Ajmal"
}]

const comparer = otherArray => current => (
  otherArray.filter(other => (
    other.id === current.id && other.name === current.name
  )).length === 0
)
const onlyInA = a.filter(comparer(b));
const onlyInB = b.filter(comparer(a));

const result = onlyInA.concat(onlyInB);

console.log(result);
