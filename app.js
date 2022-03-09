//MODULO 5

// •	JSON
let jsonExample = {
    "clave" : "valor",
    "array" : ["elementos", 1],
    "numero" : 2
}

// •	MÉTODOS DE STRINGS

let nombreCadena = 'fran'
console.log(nombreCadena[2]);
console.log("nombreCadena", nombreCadena.length);

let arrayEjemplo = ["Bart", "Lisa", "Moe"];
console.log("arrayEjemplo", arrayEjemplo.length);
console.log("arrayEjemplo En Pos", arrayEjemplo[1].length);

let saludo = "Hola, estamos programando";
console.log(saludo.indexOf('hola'));
console.log(saludo.indexOf('estamos'));
console.log(saludo.indexOf('m'));

//slice

console.log(saludo.slice(6,10));
console.log(saludo.slice(6));
console.log(saludo.slice(-5));

//trim
let nombreEspacios = "          Daniel           Duque       ";
console.log(nombreEspacios.trim());

//split
let letraYMCA = "It's fun to stay at the... YMCA"
console.log(letraYMCA.split(' '));
console.log(letraYMCA.split('... '));

//replace
let fraseReemplazo = 'Aguante Python';
console.log(fraseReemplazo.replace('Python', 'JS'));
console.log(fraseReemplazo.replace('Py', 'JS'));

//playGround completar URL
function dominio(url){
    return 'https://www.' + url.trim();
}

console.log(dominio('app.utp.edu.co'));

//playGrounnd Contar los caracteres
let textoPG = 'un texto cualqueir';
console.log(textoPG.length);

//Reemplazo fast fast
function reemplazoFastFast(texto, buscar, reemplazar){
    return texto.replace(buscar, reemplazar);
}

console.log(reemplazoFastFast(textoPG, 'cualqueir', 'cualquiera'));

//playGround Están hablando de mi
let textoMenciona = "Existen muchos lenguajes de programación y Javascript es uno de ellos"
function menciona(texto, buscar){
    if(texto.indexOf(buscar) !== -1){
        return true;
    }
    return false;
}

console.log(menciona(textoMenciona, 'progra'));

//playGround solo el nombre
let saludoLicenciada = "hola!, soy Carli"
let licenciada = saludoLicenciada.slice(-5);
console.log(licenciada);

// •	OBJETOS LITERALES
//Crear un objeto literal
let perroPG = {
    nombre:'bobi',
    edad: 12,
    vacunado : true
}

console.log(perroPG);

//Utilizando los métodos de los objetos
let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function(cantidadHoras){
        this.energia = this.energia - (cantidadHoras * 5);
        this.experiencia = this.experiencia + (cantidadHoras * 2);
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);


// •	ARROW FUNCTIONS

const saludoArrow = () => "hola mundo";

console.log(saludoArrow());

const dobleDe = numero => numero * 2

console.log(dobleDe(4));

const suma = (a, b) => a + b;

console.log(suma(2,2));

const horaActual = () => {
    let fecha = new Date();
    return fecha.getHours() + ':' + fecha.getMinutes();
}

console.log(horaActual());

//playGrounnd Convertir a arrow function

let dameCinco = () => [1,2,3,4,5]; 

let multiplicarPorDos = () => 123 * 2;

let mostrarNombre= () => "Mi nombre es Hernán";

//playGround Arrow function con parámetro

let saludarSimple =  nombre => 'Hola, ' + nombre + '!';

//playGround Ahora probemos con más de uno
let saludarDos = (nombre, apellido) => 'Hola, ' + nombre + ' ' +  apellido + '!';

// •	CONDICIONALES
//if ternario


// •	REPASO DEL CICLO FOR


// •	WHILE Y DO - WHILE

