// import type { VercelRequest, VercelResponse } from '@vercel/node';

// // Klucz API jest pobierany ze zmiennych środowiskowych Vercel
// const API_KEY = process.env['YOUTUBE_API_KEY'];

// export default async function handler(
//   request: VercelRequest,
//   response: VercelResponse
// ) {
//   if (!API_KEY) {
//     return response.status(500).json({ error: 'Brak klucza API YouTube.' });
//   }

//   if (request.method !== 'GET') {
//     response.setHeader('Allow', 'GET');
//     return response
//       .status(405)
//       .json({ error: 'Metoda niedozwolona. Użyj GET.' });
//   }

//   const raw = request.query['playlistId'];
//   const playlistId = Array.isArray(raw) ? raw[0] : raw;

//   if (!playlistId || typeof playlistId !== 'string') {
//     return response
//       .status(400)
//       .json({ error: 'Wymagany parametr playlistId.' });
//   }

//   const encodedPlaylistId = encodeURIComponent(playlistId.trim());

//   const youtubeUrl = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${encodedPlaylistId}&key=${API_KEY}&maxResults=12`;

//   try {
//     // Preferuj globalny fetch (Node 18+/Vercel). Jeśli brak, dynamicznie importuj node-fetch.
//     const fetchImpl: any =
//       (globalThis as any).fetch ??
//       (await import('node-fetch').then((m) => m.default ?? m));

//     const youtubeResponse = await fetchImpl(youtubeUrl);

//     if (!youtubeResponse || typeof youtubeResponse.ok !== 'boolean') {
//       console.error('Nieoczekiwana odpowiedź z fetch:', youtubeResponse);
//       return response.status(502).json({ error: 'Błąd pośrednika HTTP.' });
//     }

//     if (!youtubeResponse.ok) {
//       const errorData = await youtubeResponse.json().catch(() => null);
//       console.error('Błąd z API YouTube:', errorData);
//       return response.status(youtubeResponse.status || 502).json({
//         error: 'Błąd podczas komunikacji z API YouTube',
//         details: errorData,
//       });
//     }

//     const data = await youtubeResponse.json();

//     response.setHeader('Content-Type', 'application/json');
//     response.setHeader(
//       'Cache-Control',
//       's-maxage=60, stale-while-revalidate=300'
//     );
//     return response.status(200).json(data);
//   } catch (err) {
//     console.error('Błąd serwera Vercel:', err);
//     return response.status(500).json({ error: 'Wewnętrzny błąd serwera.' });
//   }
// }

// API key is fetched from Vercel environment variables
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

// npm install -D vercel
// npm install -D @vercel/node
// npx vercel dev
