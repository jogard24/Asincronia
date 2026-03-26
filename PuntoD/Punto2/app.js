// Entrega de paquetes con tiempos variables

// Enunciado
// Una empresa de mensajería tiene varios paquetes para entregar. Cada entrega tarda un
// tiempo distinto y el sistema debe ejecutar todas las entregas en paralelo. Al final debe
// mostrar cuáles paquetes se entregaron primero y consolidar un resumen final.
// Requerimientos
// • Ejecutar entregas de forma simultánea.
// • Registrar orden real de finalización.
// • Mostrar errores si alguna entrega falla.
// • Consolidar un informe final.
// Datos de entrada
// • Lista de paquetes (ID + tiempo estimado de entrega).
// Datos de salida
// • Resultado de cada entrega.
// • Orden en que finalizó cada una.
// • Informe final consolidado.

const paquetes = [
    { id: "P001", tiempo: 3000 }, 
    { id: "P002", tiempo: 1000 }, 
    { id: "P003", tiempo: 2000 }
];

const ordenFinalizacion = [];

const entregarPaquete = (paquete) => {
    return new Promise((resolve, reject) => {
        // Simulamos la operación asincrónica 
        setTimeout(() => {
            const exito = Math.random() > 0.2; // 80% probabilidad de éxito 

            if (exito) {
                const llegada = { id: paquete.id, estado: "Entregado", tiempo: paquete.tiempo };
                ordenFinalizacion.push(llegada); // Registro del orden real 
                resolve(llegada);
            } else {
                reject({ id: paquete.id, error: "Falla mecánica/Dirección no encontrada" });
            }
        }, paquete.tiempo);
    });
};

async function sistemaMensajeria() {
    console.log("--- Iniciando entregas simultáneas ---\n");
    const inicioReloj = Date.now();

    // Inicio de la ejecucion simultanea
    const resultados = await Promise.allSettled(paquetes.map(p => entregarPaquete(p)));

    // Informe final de entrega
    console.log("\n--- INFORME FINAL CONSOLIDADO ---");
    resultados.forEach(res => {
        if (res.status === "fulfilled") {
            console.log(`Paquete ${res.value.id}: ${res.value.estado}`);
        } else {
            console.log(`Paquete ${res.reason.id}: Error -> ${res.reason.error}`);
        }
    });

    // Mostrar orden real de finalización
    console.log("\n--- Orden de llegada ---");
    ordenFinalizacion.forEach((p, index) => {
        console.log(`${index + 1}. ${p.id} (finalizó en ${p.tiempo}ms)`);
    });

    console.log(`\nTiempo total de operación: ${Date.now() - inicioReloj}ms`);
}

sistemaMensajeria();