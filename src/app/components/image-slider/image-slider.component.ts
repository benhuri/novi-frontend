import { Component, Input, OnInit } from '@angular/core';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss'
})
export class ImageSliderComponent implements OnInit {
  @Input() images: Image[] = [];
  @Input() animationSpeed = 500;
  @Input() autoPlay = false;
  currentSlide = 0;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  hidden = false;
  interval: any;

  constructor() { }

  next() {
    let currentSlide = (this.currentSlide + 1) % this.images.length;
    this.jumpToSlide(currentSlide);
  }

  previous() {
    let currentSlide =
      (this.currentSlide - 1 + this.images.length) % this.images.length;
    this.jumpToSlide(currentSlide);
  }

  jumpToSlide(index: number) {
    this.hidden = true;
    setTimeout(() => {
      this.currentSlide = index;
      this.hidden = false;

      if (this.autoPlay) {
        this.autoSlide();
      }
    }, this.animationSpeed);
  }

  autoSlide() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.next();
    }, this.images[this.currentSlide].duration);
  }

  ngOnInit() {
    if (this.autoPlay) {
      this.autoSlide();
    }
  }
}
