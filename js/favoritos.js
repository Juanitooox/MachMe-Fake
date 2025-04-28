// Obtiene el botón de favoritos mediante su ID
const boton = document.getElementById('#favoritos');

// Obtiene la lista de favoritos desde el almacenamiento local (localStorage), 
// si no existe, inicializa un arreglo vacío
let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

// Función para agregar un perfil a la lista de favoritos
function saveFavorito(nombre_perfil) {
    // Verifica si el perfil no está en la lista de favoritos
    if (!favoritos.includes(nombre_perfil)) {
        // Si no está, lo agrega a la lista
        favoritos.push(nombre_perfil);
        // Guarda la lista actualizada en el almacenamiento local
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        // Muestra una alerta indicando que el perfil fue agregado
        alert(`${nombre_perfil} añadido a favoritos!`);
    } else {
        // Si ya está en los favoritos, muestra un mensaje indicándolo
        alert(`${nombre_perfil} ya está en tus favoritos.`);
    }
}

// Función para mostrar todos los perfiles en la lista de favoritos
function mostrarFavoritos() {
    // Obtiene el contenedor donde se mostrarán los perfiles
    const lista_perfiles = document.getElementById('lista_perfiles');
    // Limpia cualquier contenido previo en el contenedor
    lista_perfiles.innerHTML = '';

    // Si no hay perfiles en favoritos, muestra un mensaje indicando que no hay favoritos
    if (favoritos.length === 0) {
        lista_perfiles.innerHTML = '<p>No tienes favoritos guardados.</p>';
        return;
    }

    // Recorre cada nombre de perfil en la lista de favoritos
    favoritos.forEach(nombre => {
        // Busca el perfil correspondiente en el arreglo de perfiles
        const perfil = perfiles.find(p => p.nombre === nombre);
        // Si el perfil existe, crea una carta de perfil
        if (perfil) {
            const carta = document.createElement('div');
            // Agrega una clase CSS a la carta para estilizarla
            carta.classList.add('carta_perfil');
            // Rellena el contenido HTML de la carta con la información del perfil
            carta.innerHTML = `
                <img src="${perfil.image}" alt="${perfil.nombre}" class="imagen_perfil">
                <h3>${perfil.nombre}, ${perfil.edad}</h3>
                <p>Ciudad: ${perfil.ciudad}</p>
                <!-- Botón para eliminar el perfil de los favoritos -->
                <button onclick="eliminarFavorito('${perfil.nombre}')">Eliminar de favoritos</button>
            `;
            // Agrega la carta al contenedor de perfiles
            lista_perfiles.appendChild(carta);
        }
    });
}

// Función para eliminar un perfil de la lista de favoritos
function eliminarFavorito(nombre_perfil) {
    // Filtra la lista de favoritos para eliminar el perfil seleccionado
    favoritos = favoritos.filter(fav => fav !== nombre_perfil);
    // Guarda la lista actualizada en el almacenamiento local
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    // Muestra una alerta indicando que el perfil fue eliminado
    alert(`${nombre_perfil} eliminado de favoritos.`);
    // Vuelve a mostrar la lista actualizada de favoritos
    mostrarFavoritos();
}
