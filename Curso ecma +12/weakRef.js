// WeakRef te permite mantener una referencia debil a otro objeto evitando que este objeto sea recogido por el garvage collector.

class anyClass {
    constructor(element){
    this.ref = new WeakRef(element)
    }
    {...}
}
