import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlaylistItemsInterface } from './interfaces/playlist-items.interface';

// Add your YouTube API key here if you want to call the API directly
// Uncomment the following line and the getPlayListItems method below to use direct API calls
// const YOUTUBE_API_KEY = 'YOUR_API_KEY_HERE';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // getPlayListItems(playlistId: string): Observable<PlaylistItemsInterface> {
  //   const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${YOUTUBE_API_KEY}&maxResults=12`;
  //   return this.http.get<PlaylistItemsInterface>(url);
  // }

  getPlayListItems(playlistId: string): Observable<PlaylistItemsInterface> {
    const url = `/api/youtube-proxy?playlistId=${playlistId}`;
    return this.http.get<PlaylistItemsInterface>(url);
  }
}
