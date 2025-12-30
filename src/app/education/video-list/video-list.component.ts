import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

import { SingleVideoInterface } from '../interfaces/single-video.interface';

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.css',
})
export class VideoListComponent implements OnInit {
  showVideoComponent: boolean = false;

  playlistId = 'PLaJ3Q2SV-7LvhzOfqcmq_VsfarNTL43N2';

  playlistAuthor: string = '';
  playlistItems: SingleVideoInterface[] = [];

  private apiService = inject(ApiService);

  ngOnInit(): void {
    this.apiService.getPlayListItems(this.playlistId).subscribe((pl_items) => {
      this.playlistItems = pl_items.items;
      this.playlistAuthor = pl_items.items[0].snippet.channelTitle;
    });
    setTimeout(() => {
      this.showVideoComponent = true;
    }, 300);
  }
}
