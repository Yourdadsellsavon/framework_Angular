import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent {
  @Input()
  images!: string[];

  slideIndex: number = 0;

  plusSlides(n: number) {
    this.slideIndex += n;
  }
}
