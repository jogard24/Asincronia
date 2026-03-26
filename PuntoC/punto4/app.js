// 4. Encadenamiento de Callbacks (Callback Hell controlado)

// Crear tres procesos consecutivos 
// (por ejemplo: tomar datos → procesar datos → mostrar resultado), 
// cada uno con un setTimeout, y enlazarlos mediante callbacks.

function tomarDatos(callback) {
    console.log("Tomando datos del usuario...");
    
    setTimeout(() => {
        const datos = { nombre: "Sebastian", pedido: "Pizza Margherita" };
        console.log("Datos recibidos:", datos);
        callback(datos);
    }, 1000);
}
 
function procesarDatos(datos, callback) {
    console.log("Procesando datos...");
    
    setTimeout(() => {
        const resultado = {
            ...datos,
            estado: "procesado",
            timestamp: new Date().toLocaleTimeString()
        };
        console.log("Datos procesados:", resultado);
        callback(resultado);
    }, 1500);
}
 
function mostrarResultado(resultado, callback) {
    console.log("Mostrando resultados...");
    
    setTimeout(() => {
        console.log("RESULTADO:");
        console.log("Cliente:", resultado.nombre);
        console.log("Pedido:", resultado.pedido);
        console.log("Estado:", resultado.estado);
        console.log("Hora:", resultado.timestamp);
        callback();
    }, 1000);
}
 
tomarDatos((datos) => {
    procesarDatos(datos, (resultado) => {
        mostrarResultado(resultado, () => {
            console.log("Proceso completado\n");
        });
    });
});