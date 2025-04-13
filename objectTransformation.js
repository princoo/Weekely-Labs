function validateObject(obj) {
  if (!obj || typeof obj !== 'object' || Object.keys(obj).length === 0) {
    return `you might be passing the wrong input data type`;
  }
}
function fullName(person) {
  const error = validateObject(person);
  if (error) return error;
  return `${person?.firstName} ${person?.lastName}`;
}

function isAdult(person) {
  const error = validateObject(person);
  if (error) return error;
  return person?.age >= 18;
}

function filterByAge(people, minAge=18) {
  if (!Array.isArray(people)) {
    return `you might be passing the wrong input data type`;
  }
  return people.filter((person) => person?.age >= minAge);
}

const people = [
  { firstName: "John", lastName: "Doe", age: 20 },
  { firstName: "Jane", lastName: "Smith", age: 17 },
  { firstName: "Bob", lastName: "Johnson", age: 25 },
];

const person = {
  firstName: "Alice",
  lastName: "Brown",
  age: 25,
};