const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3000;

const SECRET_KEY = 'your-very-secure-secret-key'; // Replace with your own secure secret key
const TOKEN_EXPIRATION_TIME = '15m'; // Token valid for 15 minutes

// Generate a JWT token
function generateToken(videoId) {
  const payload = { videoId };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: TOKEN_EXPIRATION_TIME });
  return token;
}

// Validate a JWT token
function validateToken(token) {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (err) {
    return null;
  }
}

// Endpoint to get a token
app.get('/get-token/:videoId', (req, res) => {
  const { videoId } = req.params;
  const token = generateToken(videoId);
  res.json({ token });
});

// Endpoint to serve video
app.get('/video/:videoId', (req, res) => {
  const { videoId } = req.params;
  const { token } = req.query;

  const decoded = validateToken(token);
  if (!decoded || decoded.videoId !== videoId) {
    return res.status(403).send('Forbidden');
  }

  // Serve the video file
  const videoPath = `./videos/${videoId}.mp4`; // Replace with your video path
  res.sendFile(videoPath, { root: __dirname });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
