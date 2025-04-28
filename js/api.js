// Datos de ejemplo: 5 hombres y 5 mujeres de distintas ciudades
const perfiles = [
    { nombre: 'Carlos', edad: 30, ciudad: 'Bogotá', genero: 'hombre', image: 'Imagenes/1.png'},
    { nombre: 'Juan', edad: 25, ciudad: 'Medellín', genero: 'hombre', image: 'Imagenes/2.png' },
    { nombre: 'Santiago', edad: 28, ciudad: 'Cali', genero: 'hombre', image: 'Imagenes/3.png' },
    { nombre: 'Pedro', edad: 32, ciudad: 'Barranquilla', genero: 'hombre', image: 'Imagenes/4.png' },
    { nombre: 'Andrés', edad: 29, ciudad: 'Bucaramanga', genero: 'hombre', image: 'Imagenes/5.png' },
    { nombre: 'Ana', edad: 22, ciudad: 'Bogotá', genero: 'mujer', image: 'Imagenes/11.png' },
    { nombre: 'Laura', edad: 26, ciudad: 'Medellín', genero: 'mujer', image: 'Imagenes/22.png' },
    { nombre: 'Maria', edad: 23, ciudad: 'Cali', genero: 'mujer', image: 'Imagenes/33.png' },
    { nombre: 'Carolina', edad: 31, ciudad: 'Cartagena', genero: 'mujer', image: 'Imagenes/44.png' },
    { nombre: 'Isabel', edad: 27, ciudad: 'Bucaramanga', genero: 'mujer', image: 'Imagenes/55.png' }
];

// Se obtiene la lista de favoritos del almacenamiento local o un arreglo vacío si no existen
let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

// Función para mostrar todos los perfiles
function mostrarTodosPerfiles() {
    // Obtiene el contenedor de perfiles en el DOM
    const lista_perfiles = document.getElementById('lista_perfiles');
    lista_perfiles.innerHTML = ''; // Limpia el contenido previo

    // Recorre todos los perfiles para mostrarlos en el DOM
    perfiles.forEach(function(perfil) {
        const carta_perfil = document.createElement('div'); // Crea un div para cada perfil
        carta_perfil.classList.add('carta_perfil'); // Le agrega una clase CSS para su estilo
        carta_perfil.setAttribute('data_ciudad', perfil.ciudad); // Asigna el atributo 'data_ciudad' al div con el valor de la ciudad

        // Agrega el contenido HTML dentro del div de cada perfil
        carta_perfil.innerHTML = `
            <img src="${perfil.image}" alt="${perfil.nombre}" class="imagen_perfil"> <!-- Imagen del perfil -->
            <h3>${perfil.nombre}, ${perfil.edad}</h3> <!-- Nombre y edad del perfil -->
            <p>Ciudad: ${perfil.ciudad}</p> <!-- Ciudad del perfil -->
            <!-- Botón para añadir a favoritos -->
            <button class="btn-favorite" onclick="saveFavorito('${perfil.nombre}')">Añadir a favoritos</button>
        `;

        lista_perfiles.appendChild(carta_perfil); // Agrega el perfil a la lista de perfiles
    });
}

// Función para guardar un perfil en favoritos
function saveFavorito(nombre_perfil) {
    // Si el perfil no está ya en favoritos
    if (!favoritos.includes(nombre_perfil)) {
        favoritos.push(nombre_perfil); // Añadir el perfil a favoritos
        localStorage.setItem('favoritos', JSON.stringify(favoritos)); // Guardar los favoritos en localStorage
        alert(`${nombre_perfil} añadido a favoritos!`); // Alerta de éxito
    } else {
        alert(`${nombre_perfil} ya está en tus favoritos.`); // Alerta si el perfil ya está en favoritos
    }
}

// Función para mostrar solo los perfiles favoritos
function mostrarFavoritos() {
    const lista_perfiles = document.getElementById('lista_perfiles');
    lista_perfiles.innerHTML = ''; // Limpia la lista de perfiles actual

    // Si no hay favoritos
    if (favoritos.length === 0) {
        lista_perfiles.innerHTML = '<p>No tienes favoritos guardados.</p>'; // Mensaje si no hay favoritos
        return;
    }

    // Recorre los favoritos y los muestra
    favoritos.forEach(function(nombreFavorito) {
        const perfil = perfiles.find(p => p.nombre === nombreFavorito); // Encuentra el perfil por nombre
        if (perfil) {
            const carta_perfil = document.createElement('div'); // Crea un div para el perfil favorito
            carta_perfil.classList.add('carta_perfil'); // Le agrega la clase CSS

            // Rellena el contenido HTML de la carta con la información del perfil
            carta_perfil.innerHTML = `
                <img src="${perfil.image}" alt="${perfil.nombre}" class="imagen_perfil">
                <h3>${perfil.nombre}, ${perfil.edad}</h3>
                <p>Ciudad: ${perfil.ciudad}</p>
                <!-- Botón para eliminar de favoritos -->
                <button onclick="eliminarFavorito('${perfil.nombre}')">Eliminar de favoritos</button>
            `;

            lista_perfiles.appendChild(carta_perfil); // Agrega el perfil a la lista
        }
    });
}

// Función para eliminar un perfil de los favoritos
function eliminarFavorito(nombre_perfil) {
    // Filtra el perfil eliminado de la lista de favoritos
    favoritos = favoritos.filter(fav => fav !== nombre_perfil);
    localStorage.setItem('favoritos', JSON.stringify(favoritos)); // Actualiza los favoritos en localStorage
    alert(`${nombre_perfil} eliminado de favoritos.`); // Alerta de éxito
    mostrarFavoritos(); // Muestra la lista actualizada de favoritos
}

// Al cargar la página, muestra todos los perfiles disponibles
mostrarTodosPerfiles();
