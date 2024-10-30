const fnAsync = (resolved = true) => {
    return new Promise((resolve, reject) => {
        (resolved) ?
        setTimeout (() => resolve('Async!!'), 2000)
        : reject(new Error('Error!'))
    })
}

const anotherFn = () => {
    const algo = fnAsync(true);
    console.log(algo);
    console.log('Hola Perrillo');
}

console.info('Antes');
anotherFn();
console.info('Después');