// Datos de ejemplo: 5 hombres y 5 mujeres de distintas ciudades
const profiles = [
    { name: 'Carlos', age: 30, city: 'Bogotá', gender: 'male', image: './assets/img/default.png' },
    { name: 'Juan', age: 25, city: 'Medellín', gender: 'male', image: './assets/img/default.png' },
    { name: 'Santiago', age: 28, city: 'Cali', gender: 'male', image: './assets/img/default.png' },
    { name: 'Pedro', age: 32, city: 'Barranquilla', gender: 'male', image: './assets/img/default.png' },
    { name: 'Andrés', age: 29, city: 'Bucaramanga', gender: 'male', image: './assets/img/default.png' },
    { name: 'Ana', age: 22, city: 'Bogotá', gender: 'female', image: './assets/img/default.png' },
    { name: 'Laura', age: 26, city: 'Medellín', gender: 'female', image: './assets/img/default.png' },
    { name: 'Maria', age: 23, city: 'Cali', gender: 'female', image: './assets/img/default.png' },
    { name: 'Carolina', age: 31, city: 'Cartagena', gender: 'female', image: './assets/img/default.png' },
    { name: 'Isabel', age: 27, city: 'Bucaramanga', gender: 'female', image: './assets/img/default.png' }
];

// Mostrar perfiles en el DOM
const profilesList = document.getElementById('profiles-list');
profiles.forEach(function(profile) {
    const profileCard = document.createElement('div');
    profileCard.classList.add('profile-card');
    profileCard.setAttribute('data-city', profile.city);
    profileCard.innerHTML = `
        <img src="${profile.image}" alt="${profile.name}">
        <h3>${profile.name}, ${profile.age}</h3>
        <p>${profile.city}</p>
    `;
    profilesList.appendChild(profileCard);
});
