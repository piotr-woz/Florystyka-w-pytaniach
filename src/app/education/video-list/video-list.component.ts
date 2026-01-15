import {
  Component,
  OnInit,
  inject,
  ChangeDetectionStrategy,
  signal,
  computed
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { SingleVideoInterface } from '../interfaces/single-video.interface';
import { ApiService } from '../api.service';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-video-list',
  imports: [HeaderComponent, RouterLink],
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class VideoListComponent {
  private readonly playlistId = 'PLaJ3Q2SV-7LvhzOfqcmq_VsfarNTL43N2';
  private apiService = inject(ApiService);

  isTransition = signal(true);

  // protected readonly playlistAuthor = signal('');
  // protected readonly playlistItems = signal<SingleVideoInterface[]>([]);

  // *** httpClient version ***
  // ngOnInit(): void {
  //   this.apiService.getPlayListItems(this.playlistId).subscribe(pl_items => {
  //     this.playlistAuthor.set(pl_items.items[0].snippet.channelTitle);
  //     this.playlistItems.set(pl_items.items);
  //   });
  // }

  // *** httpResource version ***
  private readonly playlistResource = this.apiService.getPlayListItems(this.playlistId);

  protected readonly isLoading = this.playlistResource.isLoading;
  protected readonly error = this.playlistResource.error;
  protected readonly errorMessage = computed(() => (this.error() ? this.error()?.message : ''));

  protected readonly playlistAuthor = computed<string>(
    () => this.playlistResource.value()?.items?.[0]?.snippet?.channelTitle ?? ''
  );
  protected readonly playlistItems = computed<SingleVideoInterface[]>(
    () => this.playlistResource.value()?.items ?? []
  );

  onTransitionEnd(): void {
    this.isTransition.set(false);
  }
}
