import { Component, OnInit } from '@angular/core';
import { ImageService } from './services/image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.imageService.getAllImages().subscribe(images => {
      this.images = images;
    });
  }
  
  images: any[] = [];
}
