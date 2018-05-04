import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { News } from './../models/newYorker.model';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  @Input() childSelectedNews: News;
  @Output() clickedDone = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
