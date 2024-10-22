// Arrays destructructuring
let fruits = ['Manzana', 'Plátano'];
let [a, b] = fruits;

console.log(a, fruits[1]); // Manzana
console.log(b); // Plátano

let user = {name: 'Edu', age: 36};
let {age, name} = user;

console.log(name, age); // Edu 36