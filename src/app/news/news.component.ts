import { Component, OnInit } from '@angular/core';
import { News } from './../models/newYorker.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [ArticleService]
})
export class NewsComponent implements OnInit {
  articles: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;


  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }
  goToDetailPage(clickedArticle) {
      this.router.navigate(['articles', clickedArticle.$key]);
    };

}
