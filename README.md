# NimeStream

NimeStream adalah platform streaming anime dengan subtitle Indonesia. Nikmati anime favorit Anda dengan kualitas HD tanpa iklan pop-up!

## Fitur

- Streaming anime dengan kualitas HD
- Subtitle Indonesia
- Tanpa iklan pop-up
- Pengaturan kualitas video

## Contoh Kode

### HTML File

Berikut adalah contoh file HTML yang digunakan di proyek ini:

```html name=example.html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Nonton streaming anime subtitle Indonesia dengan kualitas HD tanpa iklan pop-up!">
  <meta name="keywords" content="Nonton anime, Solo Leveling, Demon Slayer, Streaming anime sub indo, anime terbaru">
  <title>NimeStream - Streaming Anime</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>NimeStream - Streaming Anime</h1>
  </header>
  <main>
    <h2>Anime Terbaru</h2>
    <div class="anime-list">
      <div class="anime-item">
        <img src="https://raw.githubusercontent.com/Msnewbee/NimeStream-/main/solo-leveling.jpg" alt="Solo Leveling">
        <h3>Solo Leveling</h3>
      </div>
      <div class="anime-item">
        <img src="https://cdn.myanimelist.net/images/anime/1286/99889.jpg" alt="Demon Slayer">
        <h3>Demon Slayer</h3>
      </div>
    </div>
  </main>
  <footer>
    <p>&copy; 2025 NimeStream. All rights reserved.</p>
  </footer>
</body>
</html>
```

### CSS File

Berikut adalah contoh file CSS yang digunakan di proyek ini:

```css name=styles.css
body {
  background-color: #121212;
  color: white;
  font-family: Arial, sans-serif;
}

header {
  text-align: center;
  font-size: 28px;
  font-weight: bold;
}

.anime-list {
  display: flex;
  gap: 20px;
}

.anime-item {
  background: #333;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
}

.anime-item img {
  width: 150px;
  height: 225px;
  border-radius: 10px;
}

footer {
  text-align: center;
  margin-top: 20px;
}
```

### JavaScript File

Berikut adalah contoh file JavaScript yang digunakan di proyek ini:

```javascript name=script.js
document.addEventListener('DOMContentLoaded', function() {
  // Your JavaScript code here
  console.log('NimeStream is ready!');
});
```

## Instalasi

Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah berikut:

1. Clone repositori ini:
   ```sh
   git clone https://github.com/Msnewbee/NimeStream-.git
   ```
2. Navigasi ke direktori proyek:
   ```sh
   cd NimeStream-
   ```
3. Buka `index.html` di browser favorit Anda.

## Kontribusi

Kami menyambut kontribusi dari komunitas! Jika Anda ingin berkontribusi, mohon baca [panduan kontribusi](CONTRIBUTING.md) kami terlebih dahulu.

## Lisensi

Proyek ini dilisensikan di bawah lisensi MIT. Lihat file [LICENSE](LICENSE) untuk informasi lebih lanjut.
