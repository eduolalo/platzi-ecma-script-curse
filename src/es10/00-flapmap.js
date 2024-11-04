// flat
const arr = [1,2,3,4,5,6,7,[1,2,3,[1,2,3]]];

console.log(arr.flat(2));

// flatMap
const arr2 = [1,2,3,4,5];
console.log(arr2.flatMap(v => [v, v * 2]));