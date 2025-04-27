document.getElementById('search-input').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const profiles = document.querySelectorAll('.profile-card');

    profiles.forEach(function(profile) {
        const name = profile.querySelector('h3').innerText.toLowerCase();
        if (name.includes(searchValue)) {
            profile.style.display = 'block';
        } else {
            profile.style.display = 'none';
        }
    });
});
