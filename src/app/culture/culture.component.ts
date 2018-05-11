import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { News } from './../models/newYorker.model';
import { ArticleService } from '../article.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.css'],
  providers: [ArticleService]
})
export class CultureComponent implements OnInit {
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
