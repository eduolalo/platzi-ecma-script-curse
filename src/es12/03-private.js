// setters and getters
class Carnal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    #speak () {
        return 'Ya llegó tu papá'
    }
    greeting () {
        return `${this.#speak()}, ${this.name}`
    }

    get uAge () {
        return this.age
    }

    set uAge (n) {
        this.age = n
    }
}

const elKevin = new Carnal('el Deivid', 36)
console.log(elKevin.uAge)
elKevin.uAge = 37
console.log(elKevin.uAge)
console.log(elKevin.greeting())
console.log(elKevin.speak())