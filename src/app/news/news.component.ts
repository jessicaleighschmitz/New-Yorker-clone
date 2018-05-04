import { Component, OnInit, Input } from '@angular/core';
import { News } from './../models/newYorker.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
