import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlaylistItemsInterface } from './interfaces/playlist-items.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPlayListItems(playlistId: string) {
    const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=AIzaSyDm8n-CPKOHDAl38Vay7U8OWCyPuQ-N9-Q&maxResults=12`;
    return this.http.get<PlaylistItemsInterface>(url);
  }
}
