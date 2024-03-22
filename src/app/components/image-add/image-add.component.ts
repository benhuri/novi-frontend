import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-image-add',
  templateUrl: './image-add.component.html',
  styleUrls: ['./image-add.component.css']
})
export class ImageAddComponent implements OnInit {

  newImage: Image = {
    id: 0,
    url: '',
    duration: 0
  };

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }

  addImage(): void {
    this.imageService.addImage(this.newImage).subscribe(() => {
      // Reset form and reload images
      this.newImage = {
        id: 0,
        url: '',
        duration: 0
      };
    });
    this.imageService.getAllImages();
  }
}
