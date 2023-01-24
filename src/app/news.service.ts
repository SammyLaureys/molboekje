import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { News } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  serviceURL : string ;

  constructor(private http: HttpClient) {
    this.serviceURL = "http://localhost:3000/articles"
   }

  getArticles(): Observable<News[]> {
    return this.http.get<News[]>(this.serviceURL)
  }
}
