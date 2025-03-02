// Generate a token (this is a simple example, use a secure method in production)
function generateToken() {
    const secret = 'your-secret-key';
    const timestamp = Math.floor(Date.now() / 1000);
    return btoa(`${timestamp}:${secret}`);
}

// Attach token to video URL
function getVideoUrl(videoId) {
    const token = generateToken();
    return `https://nimestream.com/video/${videoId}?token=${token}`;
}

document.addEventListener('DOMContentLoaded', function() {
    const videoPlayer = document.getElementById('anime-player');
    const videoId = 'example-video-id'; // Replace with your video ID
    videoPlayer.src = getVideoUrl(videoId);
});
