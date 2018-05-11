import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { News } from './../models/newYorker.model';
import { ArticleService } from '../article.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [ArticleService]
})
export class BooksComponent implements OnInit {
  articles: FirebaseListObservable<any[]>;
  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }
  detailArticles(clickedArticle){
    this.router.navigate(['culture', clickedArticle.$key])
  }
  goToDetailPage(clickedAlbum) {
   this.router.navigate(['articles', clickedAlbum.$key]);
  };
}
