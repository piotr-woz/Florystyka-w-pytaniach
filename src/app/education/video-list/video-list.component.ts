import { Component, OnInit, inject, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

import { SingleVideoInterface } from '../interfaces/single-video.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-video-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VideoListComponent implements OnInit {
  private readonly playlistId = 'PLaJ3Q2SV-7LvhzOfqcmq_VsfarNTL43N2';

  protected readonly playlistAuthor = signal('');
  protected readonly playlistItems = signal<SingleVideoInterface[]>([]);

  private apiService = inject(ApiService);

  ngOnInit(): void {
    this.apiService.getPlayListItems(this.playlistId).subscribe(pl_items => {
      this.playlistItems.set(pl_items.items);
      this.playlistAuthor.set(pl_items.items[0].snippet.channelTitle);
    });
  }
}
