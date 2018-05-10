import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { News } from './../models/newYorker.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
  providers: [ArticleService]
})
export class ShowComponent implements OnInit {
    articleId: string;
    articleToDisplay;



  constructor(private route: ActivatedRoute, private location: Location, private articleService: ArticleService) { }

  ngOnInit() {
      this.route.params.forEach((urlParameters) => {
      this.articleId = urlParameters['id'];
    });
      this.articleToDisplay = this.articleService.getArticlesById(this.articleId);
    }

}
