import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../models/image.model';
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.baseUrl+'/images');
  }

  addImage(image: Image): Observable<Image> {
    return this.http.post<Image>(`${this.baseUrl}/addImage`, image);
  }

  deleteImage(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteImage/${id}`);
  }
  
}
