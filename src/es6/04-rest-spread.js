// Arrays destructructuring
let fruits = ['Manzana', 'Plátano'];
let [a, b] = fruits;

console.log(a, fruits[1]); // Manzana
console.log(b); // Plátano

let user = {name: 'Edu', age: 36};
let {age, name} = user;

console.log(name, age); // Edu 36

// spread operator
let person = {name: 'Edu', age: 36};
let country = 'MX';

let data = {...person, country, id: '8d0fad1b-9ea3-47d7-91e8-a2853b2ebdc4' };

console.log(data); // {name: 'Edu', age: 36, country: 'MX'}

// rest parameter

function sum (num, ...values) {
  console.log(num);
  console.log(num + values[0]);
  console.log(values)
  return num + values[0];
}

console.log(sum(1, 1, 2, 3))