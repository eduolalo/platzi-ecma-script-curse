const regex = /\b(Cayumito)+\b/g;

const fruit = 'Cayumito, naranja, banana, manzana, limón, anona, cayumito';

for (const match of fruit.matchAll(regex)) {
  console.log(match);
}

console.log(fruit.match(regex))