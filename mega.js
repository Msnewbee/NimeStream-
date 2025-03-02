// Example function to get temporary download link from Mega.nz
async function getTemporaryLink(fileId) {
    const response = await fetch(`/api/get-temporary-link?fileId=${fileId}`);
    const data = await response.json();
    return data.temporaryLink;
}

document.addEventListener('DOMContentLoaded', async function() {
    const videoPlayer = document.getElementById('anime-player');
    const fileId = 'example-file-id'; // Replace with your file ID
    const temporaryLink = await getTemporaryLink(fileId);
    videoPlayer.src = temporaryLink;
});
