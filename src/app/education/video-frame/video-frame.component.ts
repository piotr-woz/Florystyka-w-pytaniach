import {
  Component,
  inject,
  OnInit,
  signal,
  ChangeDetectionStrategy,
  input,
  computed,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SafePipe } from '../../safe.pipe';

@Component({
  selector: 'app-video-frame',
  imports: [SafePipe, RouterLink],
  templateUrl: './video-frame.component.html',
  styleUrl: './video-frame.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VideoFrameComponent {
  // *** ActivatedRoute version ***
  // protected readonly videoUrl = signal<string | null>(null);

  // private readonly route = inject(ActivatedRoute);
  // private readonly YT_ID_REGEX = /^[a-zA-Z0-9_-]{11}$/;

  // ngOnInit(): void {
  //   this.route.queryParams.subscribe(params => {
  //     const id = params['id'];

  //     if (this.isValidYoutubeId(id)) {
  //       this.videoUrl.set(`https://www.youtube.com/embed/${id}?si=Denm8vm_D5_7nnfW`);
  //     } else {
  //       console.warn('Invalid video id', id);
  //       this.videoUrl.set(null);
  //     }
  //   });
  // }

  // private isValidYoutubeId(id: unknown): id is string {
  //   return typeof id === 'string' && this.YT_ID_REGEX.test(id);
  // }

  // *** withComponentInputBinding version ***
  // withComponentInputBinding allows us to use the input() function to bind route parameters directly to component properties
  // Here, we bind the 'id' query parameter to the videoId signal

  // Takes the 'id' query parameter from the route and assigns it to the videoId signal
  protected readonly videoId = input<string | null>(null, { alias: 'id' });

  private readonly YT_ID_REGEX = /^[a-zA-Z0-9_-]{11}$/;

  // Automatically compute the video URL whenever the videoId changes
  protected readonly videoUrl = computed(() => {
    const id = this.videoId();

    if (this.isValidYoutubeId(id)) {
      return `https://www.youtube.com/embed/${id}?si=Denm8vm_D5_7nnfW`;
    }

    if (id) {
      console.warn('Invalid video id:', id);
    }
    return null;
  });

  private isValidYoutubeId(id: string | null): id is string {
    return !!id && this.YT_ID_REGEX.test(id);
  }
}
