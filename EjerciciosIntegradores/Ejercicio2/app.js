// Ejercicio integrador 2:
// Centro de Procesamiento de Órdenes
// Vamos a simular un centro que procesa órdenes de forma asincrónica. Cada orden
// requiere pasar por varios pasos: verificación, procesamiento, registro y notificación.
// Algunos pasos tardan más tiempo que otros y debemos garantizar que el sistema no se
// bloquee. Usaremos callbacks, promesas y async/await dentro del mismo ejercicio para
// comparar cómo evoluciona el flujo.

//Lista con los objectos de cada usuario
const ordenes = [{ id: 1, cliente: "Ana", monto: 120000 },
    { id: 2, cliente: "Luis", monto: 80000 },
    { id: 3, cliente: "Maria", monto: 150000 }
];

// Función auxiliar para obtener el tiempo transcurrido
const tiempo = (inicio) => `${Date.now() - inicio}ms`;

// Primera parte parte

// Verificación de datos (1500ms)
// El date.now nos aydara a verificar el tiempo en milisegundos
const inicioCB = Date.now();

function procesarConCallbacks(indice) {
    if (indice >= ordenes.length) {
        console.log(`\n--- Final: Completado en ${tiempo(inicioCB)} ---`);
        return;
    }

    const o = ordenes[indice];
    console.log(`\n[${tiempo(inicioCB)}] Iniciando Orden ${o.id} - ${o.cliente}`);

    // Verificación (1500ms)
    setTimeout(() => {
        console.log(`[${tiempo(inicioCB)}] Orden ${o.id}: Verificada`);
        
        // Procesamiento (2000ms)
        setTimeout(() => {
            console.log(`[${tiempo(inicioCB)}] Orden ${o.id}: Procesada`);
            
            // Registro (1000ms)
            setTimeout(() => {
                console.log(`[${tiempo(inicioCB)}] Orden ${o.id}: Registrada`);
                
                // Notificación (500ms)
                setTimeout(() => {
                    console.log(`[${tiempo(inicioCB)}] Orden ${o.id}: Notificada`);
                    // Para iniciar con la siguiente persona
                    procesarConCallbacks(indice + 1);
                }, 500);
            }, 1000);
        }, 2000);
    }, 1500);
}

procesarConCallbacks(0);

//Segunda parte 

//Se crea la promesa a usar
const paso = (nombre, ms, ordenId) => new Promise(resolve => {
    setTimeout(() => {
        console.log(`[${nombre}] Orden ${ordenId} finalizada en este paso`);
        resolve();
    }, ms);
});

const inicioPromesas = Date.now();

// Procesar en cadena de promesas
let cadena = Promise.resolve();

ordenes.forEach(o => {
    cadena = cadena
        .then(() => paso("Verificación", 1500, o.id))
        .then(() => paso("Procesamiento", 2000, o.id))
        .then(() => paso("Registro", 1000, o.id))
        .then(() => paso("Notificación", 500, o.id));
});

cadena.then(() => console.log(`\n--- Final de las promesas: ${tiempo(inicioPromesas)} ---`));

//Tercera Parte


async function modoSerie() {
    const inicio = Date.now();
    for (const o of ordenes) {
        await paso("Verificación", 1500, o.id);
        await paso("Procesamiento", 2000, o.id);
        await paso("Registro", 1000, o.id);
        await paso("Notificación", 500, o.id);
    }
    console.log(`\nTiempo Total: ${tiempo(inicio)}`); 
}