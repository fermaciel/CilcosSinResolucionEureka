/* 1-Escribir un algoritmo que nos pida una clave
 y verifique  que sea la correcta tenga en 
 cuenta que  la  palabra clave es "eureka"
 Solo tenemos 3 intentos para  acertar si 
 fallamos los 3  intentos el sistema  mostrara
 un mensaje indicandonos que  hemos agotado 
 todas las  oportunidades
 Si acertamos la clave saldremos directamente 
 del programa. */

//En este  espacio se van a declarar las variables
const CLAVE: string = "eureka";
let claveIngresada: string | null = prompt("Ingrese la clave:");
let intento: number = 3;

//En este espacio se evaluara que la clave sea correcta

while (intento !== 1) {
  if (claveIngresada !== CLAVE) {
    intento = intento - 1;
    claveIngresada = prompt("clave incorrecta. Oportunidades:  " + intento);
  } else {
    intento = 1;
  }
}
if (claveIngresada === CLAVE) {
  console.log("CLAVE CORRECTA");
} else {
  console.log("lo sentimos, se agotaron sus intentos");
}
