/**  Ejercicio integrador 1:
Simular un proceso de “consulta de usuario”, que requiere:
1. “Buscar usuario” (promesa de 1 segundo)
2. “Consultar permisos” (promesa de 2 segundos)
3. “Generar reporte final” (promesa de 1 segundo)
Realizarlo en tres versiones:
• Con callbacks
• Con promesas
• Con async/await
Meta: identificar ventajas y desventajas reales de cada técnica.*/

function buscarUsuario(callback) {
    setTimeout(() => {
        console.log("Usuario encontrado");
        callback();
    }, 1000);
}

function consultarPermisos(callback) {
    setTimeout(() => {
        console.log("Permisos obtenidos");
        callback();
    }, 2000);
}

function generarReporte() {
    setTimeout(() => {
        console.log("Reporte generado");
    }, 1000);
}

// Ejecución
buscarUsuario(() => {
    consultarPermisos(() => {
        generarReporte();
});
});