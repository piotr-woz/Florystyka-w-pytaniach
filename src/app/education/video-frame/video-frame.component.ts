import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SafePipe } from '../../safe.pipe';

@Component({
  selector: 'app-video-frame',
  standalone: true,
  imports: [SafePipe],
  templateUrl: './video-frame.component.html',
  styleUrl: './video-frame.component.scss',
})
export class VideoFrameComponent implements OnInit {
  videoId = '';
  videoUrl = '';

  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.queryParams.subscribe((item) => {
      this.videoId = item['id'];
      this.videoUrl = `https://www.youtube.com/embed/${this.videoId}?si=Denm8vm_D5_7nnfW`;
    });
  }

  backToVideoList(): void {
    sessionStorage.setItem('value', 'back');
  }
}
