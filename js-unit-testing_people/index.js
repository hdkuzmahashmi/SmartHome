export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}
const people = [
  {
    id: 1,
    firstName: "Jane",
    lastName: "Doe",
    age: 21,
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Doe",
    age: 18,
  },
  {
    id: 3,
    firstName: "Max",
    lastName: "Mustermann",
    age: 32,
  },
  {
    id: 4,
    firstName: "Erika",
    lastName: "Musterfrau",
    age: 38,
  },
  {
    id: 5,
    firstName: "Luke",
    lastName: "Skywalker",
    age: 23,
  },
];
export function getFullNames(people) {
  return people.map((person) => `${person.firstName} ${person.lastName}`);
}

export function getNameAndAge(people) {
  return people.map(
    (person) => `${person.firstName} ${person.lastName} (${person.age})`
  );
}

export function getPeopleByAge(people, age) {
  return people.filter((person) => person.age == age);
}

export function getPeopleNamesOlderThan(people, age) {
  return people.find((person) => person.age > age);
}

//const res = getPeopleNamesOlderThan(people, 21);
//console.log(res);

export function getPeopleByLastName(people, lastName) {}

export function findPersonById(people, id) {}

export function isAnyoneOlderThan(people, age) {}

export function getFullNamesSortedByAge(people) {}
