import { Component, OnInit } from '@angular/core';
import { News } from '../news.model';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public articles: News[] = [];
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getArticles().subscribe(res => {
      this.articles = res;
    })
  }


}
