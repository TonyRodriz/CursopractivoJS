const obj = {
    name: 'Antony',
    age: 29
}
const obj1: {
    ...obj,
    country: 'VZLA'
}

console.log(obj1); //con esto puedes utilizar la informacion de un elemento para crear un 2do.

