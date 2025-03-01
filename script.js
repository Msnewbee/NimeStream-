const animeDB = {
    "solo": {
        "title": "Solo Leveling",
        "genre": "Aksi, Fantasi",
        "rating": 8.39,
        "poster": {
            "S1": "https://raw.githubusercontent.com/Msnewbee/NimeStream-/352f2dc133b07f0d6384f7cccd6b34a9274db82a/solo-leveling.jpg.jpg",
            "S2": "https://sololeveling-anime.net/assets/img/top/kv_shun.png"
        },
        "seasons": {
            "S1": {
                "episodes": {
                    "1": "https://mega.nz/embed/wVQESDiL#rWrzrxNp6Ip17-s-dICc2iaMr73T5Pic5Ep563F3vlY!1a",
                    "2": "https://mega.nz/embed/gA5VnRBL#7RQII5KdmoV-Tj4OwaBOJ3ncg7q70Et7K86OE4WLPA0!1a",
                    "3": "https://mega.nz/embed/9d43yZgA#JfeYXtCuhCNDbxejLHRDkeTdW3nRK1Xz5RC1sAowfL4!1a",
                    "4": "https://mega.nz/embed/5UQCmIYR#4Lsgd_7srCe5I40zUoAqYruTYSkh6RumVAOocKoD5-g!1a",
                    "5": "https://mega.nz/embed/sEwWjTwZ#MJwYHtqIN7hp_yXCqeIyqACGZtIOVZ-YrKeoGesmBpA!1a",
                    "6": "https://mega.nz/embed/hYxzCLBQ#hfwORuSgBA7kw5_YDlqNQf-YPJhuCbc08jzzzRHQXgA!1a",
                    "7": "https://mega.nz/embed/xYxjCCKK#IXwLYHqhopYbAH6VZ4ZVv-9RxuoE0OTBgB5VkZicwJA!1a",
                    "8": "https://mega.nz/embed/cdAzCbzY#I5LwEY-QLsk6XkgJ4Fd_fWE403R_wZV6t-lOGb5-lQM!1a",
                    "9": "https://mega.nz/embed/5VxjxJ7A#mOLObws05S43C2hxxoiCAJqkJs-O3ro1LIXdoMP9xeo!1a",
                    "10": "https://mega.nz/embed/Mcp3jbJI#bwfSBck90h_u0X050bXrQF5k7KZVnNR4hY_1HN4EaNI!1a",
                    "11": "https://mega.nz/embed/4N5mTQyZ#1P2XC3_DohVFY_d1wpR80Zf1U0ORhXwX7wG7298rSg0!1a",
                    "12": "https://mega.nz/embed/BZpjALxA#9Bl_75xizjLGer-xbb9m8qMLbufl10ChJK9Y7JhFmwc!1a"
                }
            },
            "S2": {
                "episodes": {
                    "1": "https://mega.nz/embed/BRIlQYia#c3V-t6FFiCCd5usrUeuC5NWf1XHLPp1i1fbH5AFZy8Q!1a",
                    "2": "https://mega.nz/embed/RZIzlSLZ#pXeSFoaA-U1-1bJlA_Y-rgtToCNNvKpUDURJLzDfQiQ!1a",
                    "3": "https://mega.nz/embed/tMAXzRiI#lCD-7TZ9bwV_q-ZXCZ63AMSJ16wMTEieyMemYy_nBdU!1a",
                    "4": "https://mega.nz/embed/sdAxRZxQ#HalE6eTM2ioXEmN0npPpge5B_3rOseINCqb1P2jHs58!1a",
                    "5": "https://mega.nz/embed/NUwh1AZI#hm05v1roPUgw1v81-928KO7VpmoxCpRQygsNDwZMH3c!1a",
                    "6": "https://mega.nz/embed/YRwGDSyT#BBYHBlxwn91_7rQoc5B6VYzVH1bf8ky7BA6RtCNocvQ!1a",
                    "7": "https://mega.nz/embed/Mc43AThS#gAAn_Qy_EXBNi4VskyUGMkSmewcPrkdy4ZywLwJsH8g!1a",
                    "8": "https://mega.nz/embed/tEASGKCL#6AKZybT3kXPEtsrIH2hoZZtEwZezemLtvKbVjI2wQ7M!1a",
                    "9": "https://mega.nz/embed/s2_ep9",
                    "10": "https://mega.nz/embed/s2_ep10",
                    "11": "https://mega.nz/embed/s2_ep11",
                    "12": "https://mega.nz/embed/s2_ep12",
                    "13": "https://mega.nz/embed/s2_ep13"
                }
            }
        }
    }
};

let currentAnime = "solo";
let currentSeason = "S1";
let currentEpisode = "1";

function init() {
    setupEventListeners();
    loadState();
    renderAll();
}

function setupEventListeners() {
    // Anime Selection
    document.querySelectorAll('.anime-card').forEach(card => {
        card.addEventListener('click', () => {
            currentAnime = card.dataset.anime;
            currentSeason = "S1";
            currentEpisode = "1";
            renderAll();
        });
    });

    // Season Selection
    document.querySelectorAll('.season-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.season-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSeason = btn.dataset.season;
            currentEpisode = "1";
            renderAll();
        });
    });

    // Episode Navigation
    document.getElementById('prev-episode').addEventListener('click', prevEpisode);
    document.getElementById('next-episode').addEventListener('click', nextEpisode);
}

function renderAll() {
    updateAnimeInfo();
    renderEpisodeList();
    loadVideo();
    saveState();
}

function updateAnimeInfo() {
    const anime = animeDB[currentAnime];
    document.getElementById('anime-title').textContent = anime.title;
    document.querySelector('.genre').textContent = anime.genre;
    document.querySelector('.rating').textContent = `⭐ ${anime.rating}`;
    document.getElementById('anime-poster').src = anime.poster[currentSeason];
}

function renderEpisodeList() {
    const episodes = animeDB[currentAnime].seasons[currentSeason].episodes;
    const episodeList = document.getElementById('episode-list');
    
    episodeList.innerHTML = Object.keys(episodes).map(ep => `
        <div class="episode-item" 
             data-episode="${ep}" 
             onclick="loadEpisode('${ep}')">
            Episode ${ep}
        </div>
    `).join('');
}

function loadEpisode(episode) {
    currentEpisode = episode;
    renderAll();
}

function loadVideo() {
    const videoContainer = document.getElementById('video-container');
    const episodeLink = animeDB[currentAnime].seasons[currentSeason].episodes[currentEpisode];
    
    videoContainer.innerHTML = `
        <iframe src="${episodeLink}" 
                allowfullscreen 
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-presentation">
        </iframe>
    `;
}

function prevEpisode() {
    const episodes = Object.keys(animeDB[currentAnime].seasons[currentSeason].episodes);
    const currentIndex = episodes.indexOf(currentEpisode);
    if(currentIndex > 0) {
        currentEpisode = episodes[currentIndex - 1];
        renderAll();
    }
}

function nextEpisode() {
    const episodes = Object.keys(animeDB[currentAnime].seasons[currentSeason].episodes);
    const currentIndex = episodes.indexOf(currentEpisode);
    if(currentIndex < episodes.length - 1) {
        currentEpisode = episodes[currentIndex + 1];
        renderAll();
    }
}

function saveState() {
    localStorage.setItem('nimeStreamState', JSON.stringify({
        anime: currentAnime,
        season: currentSeason,
        episode: currentEpisode
    }));
}

function loadState() {
    const saved = localStorage.getItem('nimeStreamState');
    if(saved) {
        const state = JSON.parse(saved);
        currentAnime = state.anime;
        currentSeason = state.season;
        currentEpisode = state.episode;
    }
}

// Start Application
init();
