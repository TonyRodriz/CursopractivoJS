// Es un objeto global de promise cuyo argumento va a ser la forma de un arrive de promesas (que vamos a pasarle) gestionando y capturando la respuesta de la primera que sea resuelta de forma satisfactoria.

const promise1 = new Promise ((resolve,reject) => reject("1"));
const promise2 = new Promise ((resolve,reject) => resolve("2"));
const promise3 = new Promise ((resolve,reject) => resolve("3"));

Promise.any([promise1,promise2,promise3])
    .then(response => console.log(response))


// en este caso devolvera el primer valor que se resuelva que es el 2do caso, devolvera "2"