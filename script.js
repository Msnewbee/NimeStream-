// Data untuk Solo Leveling
const posterS1 = "https://nimestream.com/assets/solo-leveling.jpg";
const posterS2 = "https://sololeveling-anime.net/assets/img/top/kv_shun.png";

const episodeLinksS1 = {
  '1': 'wVQESDiL',
  '2': 'gA5VnRBL',
  '3': '9d43yZgA',
  '4': '5UQCmIYR',
  '5': 'sEwWjTwZ',
  '6': 'hYxzCLBQ',
  '7': 'xYxjCCKK',
  '8': 'cdAzCbzY',
  '9': '5VxjxJ7A',
  '10': 'Mcp3jbJI',
  '11': '4N5mTQyZ',
  '12': 'BZpjALxA'
};

const episodeLinksS2 = {
  '1': 'BRIlQYia',
  '2': 'RZIzlSLZ',
  '3': 'tMAXzRiI',
  '4': 'sdAxRZxQ',
  '5': 'NUwh1AZI',
  '6': 'YRwGDSyT',
  '7': 'Mc43AThS',
  '8': 'tEASGKCL',
  '9': 'Episode belum dirilis',
  '10': 'Episode belum dirilis',
  '11': 'Episode belum dirilis',
  '12': 'Episode belum dirilis',
  '13': 'Episode belum dirilis'
};

// Data untuk Demon Slayer
const dsInfo = {
  title: "Demon Slayer: Kimetsu no Yaiba Sub Indo",
  genre: "Action, Dark Fantasy, Historical, Supernatural, Demons",
  studio: "Ufotable",
  rating: "8.5",
  poster: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
  season1: {
    description: "Episode: 26 Episode | Rilis: April – September 2019",
    episodeLinks: {
      '1': 'ds_ep1',
      '2': 'ds_ep2',
      '3': 'Episode belum dirilis',
      '4': 'Episode belum dirilis',
      '5': 'Episode belum dirilis',
      '6': 'Episode belum dirilis',
      '7': 'Episode belum dirilis',
      '8': 'Episode belum dirilis',
      '9': 'Episode belum dirilis',
      '10': 'Episode belum dirilis',
      '11': 'Episode belum dirilis',
      '12': 'Episode belum dirilis',
      '13': 'Episode belum dirilis',
      '14': 'Episode belum dirilis',
      '15': 'Episode belum dirilis',
      '16': 'Episode belum dirilis',
      '17': 'Episode belum dirilis',
      '18': 'Episode belum dirilis',
      '19': 'Episode belum dirilis',
      '20': 'Episode belum dirilis',
      '21': 'Episode belum dirilis',
      '22': 'Episode belum dirilis',
      '23': 'Episode belum dirilis',
      '24': 'Episode belum dirilis',
      '25': 'Episode belum dirilis',
      '26': 'Episode belum dirilis'
    }
  }
};

// Fetch token and play video
async function playVideo(videoId) {
  const response = await fetch(`/get-token/${videoId}`);
  const data = await response.json();
  const token = data.token;
  const videoPlayer = document.getElementById('anime-player');
  videoPlayer.src = `/video/${videoId}?token=${token}`;
}

document.addEventListener('DOMContentLoaded', function() {
  // Example usage
  const videoId = episodeLinksS1['1']; // Replace with dynamic video ID
  playVideo(videoId);
});
