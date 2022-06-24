//Esto lo que hace es llamar un pedazo de codigo que se necesite cuando se desencadene un llamado como por ejemplo un click

const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello();
});

//await es para esperar por algun codigo o proceso