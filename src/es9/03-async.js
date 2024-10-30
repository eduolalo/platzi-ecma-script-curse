async function* anotherGenerator () {
    yield Promise.resolve(1)
    yield Promise.resolve(2)
    yield Promise.resolve(3)
}

const other = anotherGenerator()
other.next().then(response => console.log(response.value))
other.next().then(response => console.log(response.value))
other.next().then(response => console.log(response.value))
console.log('No hay papel :c')

async function names (array) {
    for await (let value of array) {
        console.log(value)
    }
}

names(['Edu', 'El Deivid', 'La Deyanira', 'La Kimberli'])