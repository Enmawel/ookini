function puedeReservar(cantidadTazas) {
    const LIMITE_MAXIMO = 2;
    
    // Validar que sea un número válido y mayor a cero
    if (typeof cantidadTazas !== 'number' || cantidadTazas <= 0) {
        return false;
    }

    return cantidadTazas <= LIMITE_MAXIMO;
}

function validarInputReserva(inputValue) {
    // 1. Validar que no esté vacío o solo contenga espacios
    if (!inputValue || inputValue.trim() === "") {
        return { esValido: false, mensaje: "El campo no puede estar vacío." };
    }

    // 2. Convertir a número entero (base 10)
    const cantidad = parseInt(inputValue, 10);

    // 3. Validar que sea un número válido (evitar NaN) y que no tenga letras (ej: "2 tazas" -> parseInt da 2, esto lo evita)
    if (isNaN(cantidad) || cantidad.toString() !== inputValue.trim()) {
        return { esValido: false, mensaje: "Por favor, ingresa un número válido." };
    }

    // 4. Validar que sea mayor a 0
    if (cantidad <= 0) {
        return { esValido: false, mensaje: "La cantidad debe ser mayor a 0." };
    }

    // 5. Validar el límite máximo de 2 tazas
    if (cantidad > 2) {
        return { esValido: false, mensaje: "No se puede reservar más de 2 tazas por persona." };
    }

    // Si pasa todas las validaciones
    return { esValido: true, cantidad: cantidad, mensaje: "Cantidad válida." };
}

// Supongamos que tienes este elemento en tu HTML: <input type="number" id="cantidad-tazas">
const inputTazas = document.getElementById('cantidad-tazas');
const botonReservar = document.getElementById('btn-reservar'); // Tu botón

botonReservar.addEventListener('click', () => {
    // Capturamos el value (siempre es string)
    const resultado = validarInputReserva(inputTazas.value);

    if (resultado.esValido) {
        console.log(`Procediendo con la reserva de ${resultado.cantidad} tazas.`);
        // Aquí ejecutas la lógica de éxito...
    } else {
        alert(resultado.mensaje); // O pintas el error en un span de tu interfaz
    }
});