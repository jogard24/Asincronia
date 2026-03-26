//6. Manejo de errores con Promesas
// Ejercicio:
// Crear una promesa que simule un proceso que puede fallar 50% de las veces usando resolve y
// reject.
// Meta: entender .catch() y la importancia del manejo de errores en promesas.


//Se realiza una funcion para simular que puede fallar el 50%
const promesa = new Promise((resolve, reject) => {
    if (Math.random() < 0.5){
        resolve ("Todo bien");
    } else {
        reject ("Todo mal");
    }
});

promesa
.then((res) => console.log(res))
.catch((err) => console.log(err));
