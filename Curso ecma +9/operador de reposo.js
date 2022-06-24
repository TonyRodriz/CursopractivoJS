// este puede extraer las propiedades de un objeto que aun no se ha construido.

const obj = {
    name: 'Antony',
    age: 29,
    country: 'VZLA'
}

// operador de reposo
let{ name, ...all } = obj;
console.log(name, all); // aca me mostraria el nombre { la edad, el pais} con esta estructura. Esto ocurre porque seleccione que me de el nombre y cuando coloco ...all todos los datos que estan dentro del objeto entraran dentro de los corchetes{}

let{ country, ...all } = obj;
console.log(all); // En este caso como defini country y ...all pero solo mando a llamar 'all' en el console.log, me va a aparecer solamente el nombre y la edad que seria lo que esta dentro del all. El pais no me lo daria ya que en el console.log no lo estoy llamando.