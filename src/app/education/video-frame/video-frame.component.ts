import {
  Component,
  inject,
  OnInit,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SafePipe } from '../../safe.pipe';

@Component({
  selector: 'app-video-frame',
  imports: [SafePipe],
  templateUrl: './video-frame.component.html',
  styleUrl: './video-frame.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VideoFrameComponent implements OnInit {
  protected readonly videoUrl = signal<string | null>(null);

  private route = inject(ActivatedRoute);
  private readonly YT_ID_REGEX = /^[a-zA-Z0-9_-]{11}$/;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const id = params['id'];

      if (this.isValidYoutubeId(id)) {
        this.videoUrl.set(
          `https://www.youtube.com/embed/${id}?si=Denm8vm_D5_7nnfW`
        );
      } else {
        console.warn('Invalid video id', id);
        this.videoUrl.set(null);
      }
    });
  }

  private isValidYoutubeId(id: unknown): id is string {
    return typeof id === 'string' && this.YT_ID_REGEX.test(id);
  }

  backToVideoList(): void {
    sessionStorage.setItem('value', 'back');
  }
}
