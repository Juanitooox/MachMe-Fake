let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function saveFavorite(profileName) {
    if (!favorites.includes(profileName)) {
        favorites.push(profileName);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}
