// 2. Identificando código bloqueante
// Ejercicio:
// Crea un ciclo muy grande (por ejemplo, uno que cuente hasta millones) y observa cómo afecta la
// ejecución del programa.
// Meta: evidenciar cómo una tarea pesada bloquea el hilo principal.

console.log("Inicio");

for (let i = 0; i < 500000; i++ ){

    console.log(`Estamos en el ciclo ${i}`);
    
}

console.log("Fin");
