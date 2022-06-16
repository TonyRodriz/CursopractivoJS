// JAVASCRIP ANTIGUO

function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country)
}

// Funciones JS A
newFunction();
newFunction('Ricardo', '23', 'CO');

// Concatenacion JS A
let hello = "hello"
let world = "world"
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//  Multilineas en JS A
let lorem = "lorem  esto es un texto de prueba \n"
+ "otra linea de prueba que necesitamos";

console.log(lorem)
 
// Estructuracion de elementos

let person = {
    'name' : 'Oscar'
    'age' : 32,
    'country' : 'MX'
}

console.log(person.name, person.age, person.country);

// Operador de Propagacion = Nos permite expandir varios elementos.

let team1 = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Valeria', 'Yesica', 'Camila']

let education = ['David', 'Oscar', 'Julian', 'Ricardo', 'Valeria', 'Yesica', 'Camila']

console.log(education)





// --------------- ECMASCRIP 6+

// Funciones JS Ecma
function newFunction2(name = 'oscar', age = 32, country = 'MX') {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', '23', 'CO');

// Concatenacion JS Ecma
let hello = "hello"
let world = "world"
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// Como usar Multilineas en Ecma

let lorem2 `Otra frace epica que necesitamos
Ahora es otra frase epica
`;

console.log(lorem2)

// Estructuracion de elementos

let person = {
    'name' : 'Oscar'
    'age' : 32,
    'country' : 'MX'
}
let {name, age, country} = person;
console.log(name, age, country)

// Operador de Propagacion = Nos permite expandir varios elementos.

let team1 = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Valeria', 'Yesica', 'Camila']

let education = ['David', ...team1, ...team2]

console.log(education)

