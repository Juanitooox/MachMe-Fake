document.querySelectorAll('#menu a').forEach(function(menuItem) {
    menuItem.addEventListener('click', function(e) {
        e.preventDefault();
        // Ocultar todas las secciones
        document.querySelectorAll('div[id^="section"]').forEach(function(section) {
            section.style.display = 'none';
        });
        // Mostrar la sección correspondiente
        const sectionId = menuItem.getAttribute('href').substring(1);
        document.getElementById(sectionId).style.display = 'block';
    });
});
