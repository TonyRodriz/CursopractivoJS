//para volver privado un metodo o un pedazo de codigo se debe agregar "#" antes de la seccion o elemento que queremos colocar privado. Con esto no cualquier persona podra acceder a esa parte del codigo.

class Message {
    #show(val){
        console.log(val);
    };
    get #add(val) {
        ...
    }
}
const message = new Message();
message.show('Hola!');