function fullName(person) {
  return `${obj.firstName} ${obj.lastName}`;
}

function isAdult(person){
    return person.age >= 18;
}

function filterByAge(people,minAge){
    return people.filter(person => person.age >= minAge);
}
