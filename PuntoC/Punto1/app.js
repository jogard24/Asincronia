// 1. Explorando la asincronía básica
// Ejercicio:
// Escribe un código que imprima “Inicio”, luego una operación con setTimeout que tarde 2 segundos
// y finalmente “Fin”.
// Meta: que reconozcan el orden real de ejecución.

//Imprimir inicio
console.log("Inicio");

//Una operacion setTimeout
setTimeout(() => {

    console.log(`Suma :${4 + 5}`);
}, 2000)

//Muestra de FIn
console.log("Fin");
