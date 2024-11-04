import { resolve } from "bun";

const promisWan = new Promise((resolve, reject) => reject('Regresado mi compita'));
const promisTu = new Promise((resolve, reject) => resolve('Resolvido mi compita'));
const promisTri = new Promise((resolve, reject) => resolve('Resolvido de niu mi compita'));

Promise.allSettled([promisWan, promisTu, promisTri]).then(res => console.log(res))