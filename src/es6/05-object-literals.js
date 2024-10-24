// Enhanced object literals

const newUser = (user, age, country, id) => {
    return {
        country,
        user,
        age,
        id,
    }
}

console.log(newUser('Edu', 36, 'MX', '671ee100-e117-4d39-b75e-77d20297ee77'))