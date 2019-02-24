const square = num => num * num;

const squareLong = num => {
  return num * num;
};
console.log(square(5));

const people = [
  {
    name: 'Bozo',
    age: 46
  },
  {
    name: 'Beak',
    age: 10
  },
  {
    name: 'Molly',
    age: 6
  }
];

const under30 = people.filter(person => person.age < 30);
console.log(under30);

const person46 = people.find(person1 => person1.age === 46);
console.log(person46.name);
