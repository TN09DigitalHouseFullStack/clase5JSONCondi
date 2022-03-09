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


// •	ARROW FUNCTIONS


// •	CONDICIONALES


// •	REPASO DEL CICLO FOR


// •	WHILE Y DO - WHILE

