// ID de pantalla traído desde el HTML
const pantalla = document.querySelector('#pantalla');
// Clase de botones traído desde el HTML
const botones = document.querySelectorAll('.botones button');

let operaciones = ''; // La variable acumula las operaciones

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const valor = boton.textContent;

        if (valor === 'C') {
            // Si se presiona el botón "C", limpia la pantalla y las operaciones
            pantalla.textContent = '0';
            operaciones = '';
        } else if (valor === '=') {
            // Si se presiona el botón "=", calcula la operación
            try {
                if (operaciones.includes('/0')) {
                    pantalla.textContent = 'Error: División por 0';
                    operaciones = '';
                } else {
                    const resultado = eval(operaciones); // Evalúa la operación
                    pantalla.textContent = resultado; // Muestra el resultado
                    operaciones = String(resultado); // Actualiza operaciones con el resultado
                }
            } catch {
                pantalla.textContent = 'Error'; // Maneja errores en la operación
                operaciones = '';
            }
        } else {
            // Si no es "C" ni "=", actualiza la operación
            if (pantalla.textContent === '0' && !isNaN(valor)) {
                pantalla.textContent = valor; // Reemplaza el "0" inicial
            } else {
                pantalla.textContent += valor; // Agrega el valor a la pantalla
            }
            operaciones += valor; // Agrega el valor a las operaciones
        }
    });
});
