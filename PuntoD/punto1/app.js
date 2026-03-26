// 1. Gestión de una cola de atención

// Un módulo de soporte registra solicitudes de usuarios. 
// Cada solicitud tarda un tiempo distinto en ser atendida. 
// Aunque el sistema atiende cada solicitud por turno (una a la vez), 
// el aprendiz debe simular el tiempo de espera, registrar el orden de atención 
// y calcular la duración total del proceso.

// CON ASYNC/AWAIT 
//ms = milesima de segundo
//.map para crear nuevo arreglo que hace una lista de numeros (duracion)

const solicitudes = [
    { id: 1, usuario: "Ana García", tiempoAtencion: 2000 },
    { id: 2, usuario: "Carlos López", tiempoAtencion: 1500 },
    { id: 3, usuario: "María Rodríguez", tiempoAtencion: 3000 },
    { id: 4, usuario: "Juan Pérez", tiempoAtencion: 1000 },
    { id: 5, usuario: "Laura Martínez", tiempoAtencion: 2500 }
];
 
console.log("SISTEMA DE GESTIÓN DE COLA DE ATENCIÓN");
console.log("Solicitudes registradas:", solicitudes.length);
console.log("");

function ejecutarMetodoAsyncAwait() {
    console.log("MÉTODO 3: IMPLEMENTACIÓN CON ASYNC/AWAIT");
    console.log("");
    
    function atenderSolicitudAsync(solicitud) {
        return new Promise((resolve) => {
            const horaInicio = new Date().toLocaleTimeString();
            console.log(`[${horaInicio}] Iniciando atención: ${solicitud.usuario} (ID: ${solicitud.id})`);
            
            setTimeout(() => {
                const horaFin = new Date().toLocaleTimeString();
                const resultado = {
                    id: solicitud.id,
                    usuario: solicitud.usuario,
                    horaInicio: horaInicio,
                    horaFin: horaFin,
                    duracion: solicitud.tiempoAtencion
                };
                
                console.log(`[${horaFin}] Finalizada atención: ${solicitud.usuario} - Duración: ${solicitud.tiempoAtencion}ms`);
                resolve(resultado);
            }, solicitud.tiempoAtencion);
        });
    }
    
    async function procesarColaAsync(solicitudes) {
        const tiempoInicioTotal = Date.now();
        const resultados = [];
        
        for (const solicitud of solicitudes) {
            const resultado = await atenderSolicitudAsync(solicitud);
            resultados.push(resultado);
        }
        
        const tiempoTotal = Date.now() - tiempoInicioTotal;
        return { resultados, tiempoTotal };
    }
    
    procesarColaAsync(solicitudes)
        .then(({ resultados, tiempoTotal }) => {
            console.log("RESUMEN DE ATENCIÓN (ASYNC/AWAIT)");
            console.log("Orden de atención:");
            resultados.forEach((r, i) => {
                console.log(`  ${i + 1}. ${r.usuario} - ${r.duracion}ms (${r.horaInicio} - ${r.horaFin})`);
            });
            console.log(`Tiempo total del proceso: ${tiempoTotal}ms`);
            console.log("");
            console.log("TODOS LOS MÉTODOS COMPLETADOS");
        });
}

function mostrarEstadisticas(resultados, tiempoTotal) {
    const tiempos = resultados.map(r => r.duracion);
    const promedioAtencion = tiempos.reduce((a, b) => a + b, 0) / tiempos.length;
    const tiempoMasLargo = Math.max(...tiempos);
    const tiempoMasCorto = Math.min(...tiempos);
    
    console.log("ESTADÍSTICAS:");
    console.log(`  Total de solicitudes procesadas: ${resultados.length}`);
    console.log(`  Tiempo promedio por solicitud: ${promedioAtencion}ms`);
    console.log(`  Solicitud más rápida: ${tiempoMasCorto}ms`);
    console.log(`  Solicitud más larga: ${tiempoMasLargo}ms`);
    console.log(`  Tiempo total del proceso: ${tiempoTotal}ms`);
}