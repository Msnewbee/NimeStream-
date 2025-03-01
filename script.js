// Filter
const genreFilter = document.getElementById('genre');
const seasonFilter = document.getElementById('season');
const typeFilter = document.getElementById('tipe');
const filterButton = document.getElementById('filter-button');
const animeItems = document.querySelectorAll('.anime-item');

filterButton.addEventListener('click', () => {
    const selectedGenre = genreFilter.value;
    const selectedSeason = seasonFilter.value;
    const selectedType = typeFilter.value;

    animeItems.forEach(item => {
        const itemGenres = item.dataset.genre.split(' ');
        const itemSeason = item.dataset.season;
        const itemType = item.dataset.type; // Tambahkan data-type di HTML

        const genreMatch = selectedGenre === 'semua' || itemGenres.includes(selectedGenre);
        const seasonMatch = selectedSeason === 'semua' || selectedSeason === itemSeason;
        const typeMatch = selectedType === 'semua' || selectedType === itemType;

        if (genreMatch && seasonMatch && typeMatch) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

// Search
const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    animeItems.forEach(item => {
        const animeTitle = item.querySelector('h3').textContent.toLowerCase();

        if (animeTitle.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
