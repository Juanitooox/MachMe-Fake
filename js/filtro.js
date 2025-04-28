// Escucha el evento 'change' cuando el usuario selecciona una ciudad en el filtro
document.getElementById('filtro_ciudad').addEventListener('change', function() {
    // Obtiene el valor de la ciudad seleccionada en el filtro
    const selected_ciudad = this.value;

    // Obtiene todos los perfiles (elementos con la clase 'carta_perfil')
    const perfil = document.querySelectorAll('.carta_perfil');

    // Recorre todos los perfiles para mostrar u ocultar según la ciudad seleccionada
    perfil.forEach(function(perfil) {  // Cambié el nombre del parámetro a 'perfil' para evitar conflicto con la variable 'perfil' declarada previamente
        // Obtiene el valor del atributo 'data_ciudad' de cada perfil
        const ciudad = perfil.getAttribute('data_ciudad');

        // Si no se ha seleccionado ninguna ciudad (valor vacío) o la ciudad del perfil coincide con la seleccionada, muestra el perfil
        if (!selected_ciudad || ciudad === selected_ciudad) {
            perfil.style.display = 'block';
        } else {
            // Si la ciudad no coincide, oculta el perfil
            perfil.style.display = 'none';
        }
    });
});
