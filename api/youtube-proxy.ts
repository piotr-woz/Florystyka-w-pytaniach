// Vercel serverless function to proxy YouTube API requests

// If running locally and the API key isn't set, try loading .env.local
if (!process.env['YOUTUBE_API_KEY']) {
  try {
    require('dotenv').config({ path: '.env.local' });
  } catch (e) {
    // dotenv not installed or failed to load — continue and handle missing key below
  }
}

// API key is fetched from environment variables
const API_KEY = process.env['YOUTUBE_API_KEY'];

// Using CommonJS module.exports for Vercel serverless function
module.exports = async (request: any, response: any) => {
  if (request.method !== 'GET') {
    return response.status(405).json({ error: 'Użyj metody GET.' });
  }

  if (!API_KEY) {
    console.error('BŁĄD: Zmienna API_KEY nie jest ustawiona!');
    return response.status(500).json({ error: 'Brak klucza API YouTube.' });
  }

  // Extract playlistId from query parameters
  const { playlistId } = request.query;
  const id = Array.isArray(playlistId) ? playlistId[0] : playlistId;

  if (!id) {
    return response.status(400).json({ error: 'Brak parametru playlistId.' });
  }

  const youtubeUrl = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${encodeURIComponent(
    id
  )}&key=${API_KEY}&maxResults=12`;

  // Fetch data from YouTube API
  try {
    const youtubeResponse = await fetch(youtubeUrl);
    const data = await youtubeResponse.json();

    if (!youtubeResponse.ok) {
      return response.status(youtubeResponse.status).json(data);
    }

    response.setHeader(
      'Cache-Control',
      's-maxage=60, stale-while-revalidate=300'
    );
    return response.status(200).json(data);
  } catch (err: any) {
    return response
      .status(500)
      .json({ error: 'Server Error', message: err.message });
  }
};

// To run this function locally with Vercel, follow these steps:
// npm install -D vercel
// npm install -D @vercel/node
// npm install dotenv

// npx vercel dev
