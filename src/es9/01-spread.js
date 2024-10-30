const user = {name: 'Edu', age: 36,  country:'MX'};

const {name, ...values} = user;

console.log(name);
console.log(values);