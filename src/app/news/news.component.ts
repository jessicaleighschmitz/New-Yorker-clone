import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { News } from './../models/newYorker.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Input() childNewsList: News[];
  @Output() clickSender = new EventEmitter();
  constructor() { }

  readMoreButtonClicked(articleToShow: News) {
    console.log(articleToShow);
    this.clickSender.emit(articleToShow);
  }
  ngOnInit() {
  }

}
