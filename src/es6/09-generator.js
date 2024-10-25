
function*  iterate (arr) {
    for (let value of arr) {
        yield value;
    }
}

const it = iterate(['Eduardo', 'El Daivid', 'Peluca', 'José Antonio'])

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
