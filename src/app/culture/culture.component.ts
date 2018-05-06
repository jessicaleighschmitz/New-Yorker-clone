import { Component, OnInit } from '@angular/core';
import { Culture } from '../culture.model';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.css']
})
export class CultureComponent implements OnInit {
cultureArticles: Culture[] = [
  new Culture('')
  //hard code some articles 
]
  constructor() { }

  ngOnInit() {
  }

}
