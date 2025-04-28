window.onload = function() {
    // Esperamos 3 segundos antes de mostrar el contenido principal
    setTimeout(function() {
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('app-content').style.display = 'block';
    }, 900);
};
