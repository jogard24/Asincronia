// 5. Transformando Callbacks en Promesas.

// Convertir el ejercicio anterior en una estructura basada en Promesas con .then().

function tomarDatosPromise() {
    return new Promise((resolve, reject) => {
        console.log("Tomando datos del usuario...");
        
        setTimeout(() => {
            const datos = { nombre: "Estefania", pedido: "Sandwich de pollo" };
            console.log("Datos recibidos:", datos);
            resolve(datos);
        }, 1000);
    });
}
 
function procesarDatosPromise(datos) {
    return new Promise((resolve, reject) => {
        console.log("Procesando datos...");
        
        setTimeout(() => {
            const resultado = {
                ...datos,
                estado: "procesado",
                timestamp: new Date().toLocaleTimeString()
            };
            console.log("Datos procesados:", resultado);
            resolve(resultado);
        }, 1500);
    });
}
 
function mostrarResultadoPromise(resultado) {
    return new Promise((resolve, reject) => {
        console.log("Mostrando resultado...");
        
        setTimeout(() => {
            console.log("RESULTADO:");
            console.log("Cliente:", resultado.nombre);
            console.log("Pedido:", resultado.pedido);
            console.log("Estado:", resultado.estado);
            console.log("Hora:", resultado.timestamp);
            resolve();
        }, 1000);
    });
}
 
// Ejecutar el ejercicio 5 (con Promesas)
tomarDatosPromise()
    .then(datos => procesarDatosPromise(datos))
    .then(resultado => mostrarResultadoPromise(resultado))
    .then(() => {
        console.log("Proceso finalizado\n");
    })
    .catch(error => {
        console.error("Error en el proceso:", error);
    });