
const string = "Javascrip es maravilloso, con JavaScrip puedo crear el futuro de la web";

const replaceString = string.replace("Javascrip", "Python");

console.log(replaceString);

// replace a diferencia de replaceAll te permite solamente reemplazar el primer elemento que consiga con el nombre que elijamos, en este caso solo cambia el primer Javascrip, el segundo no lo cambia porque solo se queda con el primero.

const string = "Javascrip es maravilloso, con JavaScrip puedo crear el futuro de la web";

const replaceString2 = string.replaceAll("Javascrip", "Python");

console.log(replaceString2);

//En el caso de replaceAll te permite cambiar todo lo que sea igual a Javascrip