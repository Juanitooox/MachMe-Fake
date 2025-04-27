document.getElementById('city-filter').addEventListener('change', function() {
    const selectedCity = this.value;
    const profiles = document.querySelectorAll('.profile-card');

    profiles.forEach(function(profile) {
        const city = profile.getAttribute('data-city');
        if (!selectedCity || city === selectedCity) {
            profile.style.display = 'block';
        } else {
            profile.style.display = 'none';
        }
    });
});
