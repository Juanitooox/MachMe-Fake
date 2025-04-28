// Se ejecuta cuando todo el contenido del documento HTML se ha cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el input de búsqueda mediante su ID
    const searchInput = document.getElementById('search_input');

    // Agrega un evento de entrada (input) al campo de búsqueda
    searchInput.addEventListener('input', function() {
        // Obtiene el valor ingresado en el campo de búsqueda y lo convierte a minúsculas
        const valorBusqueda = this.value.toLowerCase();
        // Obtiene todos los elementos con la clase 'carta_perfil' (perfiles mostrados en la interfaz)
        const perfilesDOM = document.querySelectorAll('.carta_perfil');

        // Recorre cada perfil mostrado en la interfaz
        perfilesDOM.forEach(carta => {
            // Obtiene el nombre del perfil (en minúsculas) desde el contenido del título <h3>
            const nombre = carta.querySelector('h3').textContent.toLowerCase();
            // Si el nombre del perfil incluye el valor de búsqueda, lo muestra
            if (nombre.includes(valorBusqueda)) {
                carta.style.display = 'block';
            } else {
                // Si no incluye el valor de búsqueda, lo oculta
                carta.style.display = 'none';
            }
        });
    });
});

// Obtiene la barra de búsqueda y los resultados de búsqueda por su ID
const barraBusqueda = document.getElementById('barra_busqueda');
const resultadosBusqueda = document.getElementById('resultados_busqueda');

// Agrega un evento de entrada (input) a la barra de búsqueda
barraBusqueda.addEventListener('input', function() {
    // Obtiene el texto ingresado en la barra de búsqueda y lo convierte a minúsculas
    const texto = barraBusqueda.value.toLowerCase();
    // Limpia los resultados anteriores de la búsqueda
    resultadosBusqueda.innerHTML = '';

    // Si el campo de búsqueda está vacío, muestra un mensaje indicando que se debe escribir algo
    if (texto === '') {
        resultadosBusqueda.innerHTML = '<p>Escribe algo para buscar.</p>';
        return;
    }

    // Filtra los perfiles para encontrar aquellos cuyos nombres incluyen el texto de búsqueda
    const resultados = perfiles.filter(perfil => 
        perfil.nombre.toLowerCase().includes(texto)
    );

    // Si no se encontraron resultados, muestra un mensaje informando de ello
    if (resultados.length === 0) {
        resultadosBusqueda.innerHTML = '<p>No se encontraron resultados.</p>';
    } else {
        // Si se encontraron resultados, crea una carta de perfil para cada uno
        resultados.forEach(perfil => {
            const carta_perfil = document.createElement('div');
            // Agrega una clase CSS a la carta de perfil para estilizarla
            carta_perfil.classList.add('carta_perfil');
            // Rellena el contenido HTML de la carta con la información del perfil
            carta_perfil.innerHTML = `
                <img src="${perfil.image}" alt="${perfil.nombre}" class="imagen_perfil">
                <h3>${perfil.nombre}, ${perfil.edad}</h3>
                <p>Ciudad: ${perfil.ciudad}</p>
                <!-- Botón para añadir el perfil a favoritos -->
                <button class="btn-favorite" onclick="saveFavorito('${perfil.nombre}')">Añadir a favoritos</button>
            `;
            // Agrega la carta de perfil al contenedor de resultados de búsqueda
            resultadosBusqueda.appendChild(carta_perfil);
        });
    }
});
