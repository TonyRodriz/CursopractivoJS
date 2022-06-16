// es una funcion especial que retorna una serie de valores segun el algoritmo definido.

function* helloWorld() {
    if (true) {
        yield 'hello, ';
    }
    if (true) {
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value); // Aqui te devolveria el primer valor hello, 
console.log(generatorHello.next().value);// El valor next entiende donde te quedaste entonces te devolveria el valor World
console.log(generatorHello.next().value);// Y aqui como no hay ningun otro codigo que mostrar te mandara un mensaje de undefined

// El valor next te permite generar 1 a 1 cada codigo que coloques dentro de tu generador
