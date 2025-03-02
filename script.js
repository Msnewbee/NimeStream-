// Data untuk Solo Leveling
var poster_S1 = "https://raw.githubusercontent.com/Msnewbee/NimeStream-/352f2dc133b07f0d6384f7cccd6b34a9274db82a/solo-leveling.jpg.jpg";
var poster_S2 = "https://sololeveling-anime.net/assets/img/top/kv_shun.png";

var episodeLinks_S1 = {
  '1': 'https://mega.nz/embed/wVQESDiL#rWrzrxNp6Ip17-s-dICc2iaMr73T5Pic5Ep563F3vlY!1a',
  '2': 'https://mega.nz/embed/gA5VnRBL#7RQII5KdmoV-Tj4OwaBOJ3ncg7q70Et7K86OE4WLPA0!1a',
  '3': 'https://mega.nz/embed/9d43yZgA#JfeYXtCuhCNDbxejLHRDkeTdW3nRK1Xz5RC1sAowfL4!1a',
  '4': 'https://mega.nz/embed/5UQCmIYR#4Lsgd_7srCe5I40zUoAqYruTYSkh6RumVAOocKoD5-g!1a',
  '5': 'https://mega.nz/embed/sEwWjTwZ#MJwYHtqIN7hp_yXCqeIyqACGZtIOVZ-YrKeoGesmBpA!1a',
  '6': 'https://mega.nz/embed/hYxzCLBQ#hfwORuSgBA7kw5_YDlqNQf-YPJhuCbc08jzzzRHQXgA!1a',
  '7': 'https://mega.nz/embed/xYxjCCKK#IXwLYHqhopYbAH6VZ4ZVv-9RxuoE0OTBgB5VkZicwJA!1a',
  '8': 'https://mega.nz/embed/cdAzCbzY#I5LwEY-QLsk6XkgJ4Fd_fWE403R_wZV6t-lOGb5-lQM!1a',
  '9': 'https://mega.nz/embed/5VxjxJ7A#mOLObws05S43C2hxxoiCAJqkJs-O3ro1LIXdoMP9xeo!1a',
  '10': 'https://mega.nz/embed/Mcp3jbJI#bwfSBck90h_u0X050bXrQF5k7KZVnNR4hY_1HN4EaNI!1a',
  '11': 'https://mega.nz/embed/4N5mTQyZ#1P2XC3_DohVFY_d1wpR80Zf1U0ORhXwX7wG7298rSg0!1a',
  '12': 'https://mega.nz/embed/BZpjALxA#9Bl_75xizjLGer-xbb9m8qMLbufl10ChJK9Y7JhFmwc!1a'
};

var episodeLinks_S2 = {
  '1': 'https://mega.nz/embed/BRIlQYia#c3V-t6FFiCCd5usrUeuC5NWf1XHLPp1i1fbH5AFZy8Q!1a',
  '2': 'https://mega.nz/embed/RZIzlSLZ#pXeSFoaA-U1-1bJlA_Y-rgtToCNNvKpUDURJLzDfQiQ!1a',
  '3': 'https://mega.nz/embed/tMAXzRiI#lCD-7TZ9bwV_q-ZXCZ63AMSJ16wMTEieyMemYy_nBdU!1a',
  '4': 'https://mega.nz/embed/sdAxRZxQ#HalE6eTM2ioXEmN0npPpge5B_3rOseINCqb1P2jHs58!1a',
  '5': 'https://mega.nz/embed/NUwh1AZI#hm05v1roPUgw1v81-928KO7VpmoxCpRQygsNDwZMH3c!1a',
  '6': 'https://mega.nz/embed/YRwGDSyT#BBYHBlxwn91_7rQoc5B6VYzVH1bf8ky7BA6RtCNocvQ!1a',
  '7': 'https://mega.nz/embed/Mc43AThS#gAAn_Qy_EXBNi4VskyUGMkSmewcPrkdy4ZywLwJsH8g!1a',
  '8': 'https://mega.nz/embed/tEASGKCL#6AKZybT3kXPEtsrIH2hoZZtEwZezemLtvKbVjI2wQ7M!1a',
  '9': 'https://mega.nz/embed/s2_ep9',
  '10': 'https://mega.nz/embed/s2_ep10',
  '11': 'https://mega.nz/embed/s2_ep11',
  '12': 'https://mega.nz/embed/s2_ep12',
  '13': 'https://mega.nz/embed/s2_ep13'
};

// Data untuk Demon Slayer
var dsInfo = {
  title: "Demon Slayer: Kimetsu no Yaiba Sub Indo",
  genre: "Action, Dark Fantasy, Historical, Supernatural, Demons",
  studio: "Ufotable",
  rating: "8.5",
  poster: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
  season1: {
    description: "Episode: 26 Episode | Rilis: April – September 2019",
    episodeLinks: {
      '1': 'https://mega.nz/embed/ds_ep1',
      '2': 'https://mega.nz/embed/ds_ep2',
      // Tambahkan link episode 3 sampai 25 sesuai kebutuhan...
      '26': 'https://mega.nz/embed/ds_ep26'
    }
  },
  season2: {
    title: "Entertainment District Arc",
    description: "Episode: 11 Episode | Rilis: Oktober 2021",
    episodeLinks: {
      '1': 'https://mega.nz/embed/ds2_ep1',
      '2': 'https://mega.nz/embed/ds2_ep2',
      // Tambahkan link episode 3 sampai 10 sesuai kebutuhan...
      '11': 'https://mega.nz/embed/ds2_ep11'
    }
  }
};

// Variabel untuk melacak anime dan season yang aktif
var currentAnime = 'solo'; // 'solo' atau 'ds'
var currentSeason = 'S1';

// Fungsi untuk mengambil parameter URL
function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

// Fungsi untuk mengupdate tampilan berdasarkan anime yang dipilih
function updateAnimeInfo() {
  var titleElem = document.querySelector("header h1");
  var animeInfoElem = document.querySelector(".anime-info");
  var posterImg = document.getElementById("anime-poster");
  var infoDiv = document.getElementById("season-info");

  if (currentAnime === 'solo')
