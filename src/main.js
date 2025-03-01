async function loadAnimeList() {
    const response = await fetch('/anime-data.json');
    const data = await response.json();

    const listContainer = document.getElementById('anime-list');
    listContainer.innerHTML = '';

    data.anime.forEach(anime => {
        const animeItem = document.createElement('a');
        animeItem.href = `/src/anime.html?anime=${anime.id}`;
        animeItem.className = "anime-item";
        animeItem.innerHTML = `
            <img src="${anime.image}" alt="${anime.title}">
            <h3>${anime.title}</h3>
        `;
        listContainer.appendChild(animeItem);
    });
}

async function loadAnimeDetails() {
    const response = await fetch('/anime-data.json');
    const data = await response.json();

    const params = new URLSearchParams(window.location.search);
    const animeId = params.get('anime') || 'solo-leveling';
    const episodeIndex = params.get('episode') ? parseInt(params.get('episode')) - 1 : 0;

    const anime = data.anime.find(a => a.id === animeId);
    if (!anime) return;

    document.getElementById('anime-title').innerText = anime.title;
    document.getElementById('anime-info').innerHTML = `<img src="${anime.image}" width="200">`;

    const episodeList = document.getElementById('episode-list');
    episodeList.innerHTML = '';

    anime.episodes.forEach((link, index) => {
        const epNum = index + 1;
        const epLink = document.createElement('a');
        epLink.href = `?anime=${anime.id}&episode=${epNum}`;
        epLink.innerText = `Episode ${epNum}`;
        if (index === episodeIndex) epLink.classList.add('active');
        episodeList.appendChild(epLink);
    });

    document.getElementById('anime-player').src = anime.episodes[episodeIndex];
}

if (document.getElementById('anime-list')) {
    loadAnimeList();
} else {
    loadAnimeDetails();
}
