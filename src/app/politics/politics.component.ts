import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { News } from './../models/newYorker.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css'],
  providers: [ArticleService]
})
export class PoliticsComponent implements OnInit {
  articles: FirebaseListObservable<any[]>;

  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit() {
    console.log('hi');
    this.articles = this.articleService.getArticles();
  }
  detailArticles(clickedArticle){
    this.router.navigate(['politics', clickedArticle.$key])
  }
}
