// 3. Manejo de asincronía con Callbacks.

// Crear una función llamada procesarPedido que simule un pedido de comida 
// con un setTimeout de 3 segundos y que reciba un callback para mostrar un mensaje final, 
//por ejemplo: “Pedido entregado”.

function procesarPedido(callback) {
    console.log("Procesando tu pedido de hamburguesa...");
    
    setTimeout(() => {
        console.log("Pedido entregado");
        callback();
    }, 3000);
} 
 
procesarPedido(() => {
    console.log("Gracias por tu compra\n");
});