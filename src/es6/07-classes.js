import { isPropertyAssignment } from "typescript"

class Perrillo {}

class Carnal {
    // métodos
    saludo () {
        return 'Cómo andamios??'
    }
}

const bato = new Carnal()
console.log(bato.saludo())
const morro = new Carnal()
console.log(morro.saludo())


// constructor

class Carnal {
    constructor() {
        console.log('Nuevo carnal')
    }
    saludo () {
        return 'Quiubo mi perrillo'
    }
}

const elDeivid = new Carnal()
console.log(elDeivid.saludo())


// this

class Carnal {
    constructor(name) {
        this.name = name
    }

    speak () {
        return 'Ya llegó tu papá'
    }
    greeting () {
        return `${this.speak()}, ${this.name}`
    }
}

const elDeivid = new Carnal('el Deivid')
console.log(elDeivid.greeting())


// setters and getters
class Carnal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak () {
        return 'Ya llegó tu papá'
    }
    greeting () {
        return `${this.speak()}, ${this.name}`
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
