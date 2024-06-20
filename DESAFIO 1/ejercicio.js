let mensajeDeBienvenida = 1;
let nombre = "jg";
console.log(`hola;${nombre}`);

alert(`hola${nombre}`)

let cursoQueGusta = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(cursoQueGusta);
let V1= 1;
let V2= 2;
let Resultado= V1+V2;
console.log(Resultado);
// console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);//

let edaddeUsuario = prompt("coloca tu edad");
let mayordeEdad = 18;
let mensajeMayorDeEdad = "eres mayor de edad"

if(edaddeUsuario >= mayordeEdad){
 alert (mensajeMayorDeEdad);
}else {alert("menor de edad");
}
console.log(mensajeMayorDeEdad)

//edad = prompt('Ingresa tu edad:');
//if (edad > 17) {
 //   console.log('Eres mayor de edad.');
//} else {
  //  console.log('Eres menor de edad.');
//}

let numero = prompt("porfavor dame un numero churumina")
if(numero >= 1){
    alert("ES POSITIVO");
}
if(numero <= -1){ 
    alert("ES NEGATIVO");
}
else(numero == 0);{ alert("ES CERO");}
//numero = parseFloat(prompt("Ingresa un número:"));
//if (numero > 0) {
//    console.log("El número es positivo.");
//} else if (numero < 0) {
//    console.log("El número es negativo.");
//} else {
 //   console.log("El número es cero.");
//}//

//let NumerosVarios = 1;
//while(NumerosVarios<= 10){
//NumerosVarios++
//}
//console.log(NumerosVarios);// ESTE ES MIO ABAJO ESTA EL CORRECTO

//numero = 1;
//while (numero <= 10) {
//    console.log(numero);
//    numero++;
//}

let nota = parseFloat(prompt("ingresa tu nota"));
if(nota >= 7){
    console.log("aprobado");
}else {
    console.log("desaprobado");
}
//nota = 8; // Reemplaza con el valor de la nota que deseas probar
    if (nota >= 7) {
        console.log("Aprobado");
    } else {
        console.log("Reprobado");
    }//

let NumeroAleatorio = 0;
NumeroAleatorio= (Math.floor(Math.random(NumeroAleatorio)*10))+1;
console.log(NumeroAleatorio);

//**Número aleatorio con Math.random** como se hace
numeroAleatorio = Math.random();
console.log(numeroAleatorio);//

//12. **Número entero aleatorio entre 1 y 10 con Math.random**
numeroIntAleatorio = parseInt(Math.random() * 10) + 1;
console.log(numeroIntAleatorio);//


 //Número entero aleatorio entre 1 y 1000 con Math.random**
numeroIntAleatorio = parseInt(Math.random() * 1000) + 1;
//console.log(numeroIntAleatorio);//
