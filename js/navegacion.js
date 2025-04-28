// Se ejecuta cuando todo el contenido del documento HTML se ha cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene los botones mediante sus IDs
    const btnInicio = document.getElementById('btn-inicio');
    const btnFavoritos = document.getElementById('btn-favoritos');
    const btnBusqueda = document.getElementById('btn-busqueda');
    const btnInfo = document.getElementById('btn-info');

    // Agrega un evento de clic al botón "Inicio"
    btnInicio.addEventListener('click', function(e) {
        e.preventDefault(); // Previene la acción por defecto (navegar)
        mostrarTodosPerfiles(); // Llama a la función para mostrar todos los perfiles
    });

    // Agrega un evento de clic al botón "Favoritos"
    btnFavoritos.addEventListener('click', function(e) {
        e.preventDefault(); // Previene la acción por defecto
        mostrarFavoritos(); // Llama a la función para mostrar solo los perfiles favoritos
    });

    // Agrega un evento de clic al botón "Busqueda"
    btnBusqueda.addEventListener('click', function(e) {
        e.preventDefault(); // Previene la acción por defecto
        mostrarBusqueda(); // Llama a la función para mostrar la sección de búsqueda
    });

    // Agrega un evento de clic al botón "Info"
    btnInfo.addEventListener('click', function(e) {
        e.preventDefault(); // Previene la acción por defecto
        mostrarInfo(); // Llama a la función para mostrar la sección de información
    });
});

// Función que muestra la sección de búsqueda (puedes personalizarla más)
function mostrarBusqueda() {
    document.getElementById('lista_perfiles').innerHTML = '<h2>Busca tu match 🔎</h2>';
}

// Función que muestra la información de la aplicación
function mostrarInfo() {
    document.getElementById('lista_perfiles').innerHTML = `
        <h2>MachMe - Información</h2>
        <p>App creada para conectar personas de cualquier parte del país.</p>
        <p>Proyecto hecho por Juanitooox </p>
    `;
}

