document.addEventListener('DOMContentLoaded', () => {
    // Obtener referencia al formulario y al botón de envío
    const form = document.querySelector('.form');
    
    // Agregar un evento al formulario para manejar la presentación
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Previene la acción por defecto del formulario de actualizar la página

        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const mensaje = document.getElementById('mensaje').value;

        // Creo el contenido para el archivo
        const contenido = `Nombre y Apellido: ${nombre}\nCorreo Electrónico: ${correo}\nMensaje:\n${mensaje}`;

        // Genero un Blob con el contenido y guardo el archivo
        const blob = new Blob([contenido], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, 'mensaje_contacto.txt');
    });
});