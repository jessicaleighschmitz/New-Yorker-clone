import { Injectable } from '@angular/core';
import { News } from './models/newYorker.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ArticleService {
  articles: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.articles = database.list('articles');
  }
  getArticles(){
    return this.articles;
  }

  getArticlesById(articleId: string) {
    return this.database.object('articles/' + articleId);
  }
}
