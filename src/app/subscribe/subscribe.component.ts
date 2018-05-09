import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { News } from './../models/newYorker.model';
import { Subscribe } from './../models/subscription.model';



@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  @Input() childSelectedNews: News; @Output() clickedAdd = new EventEmitter();

  submitForm(firstName: string, lastName: string, email: string, street: string, city: string, state: string) {
   let addSubscription: Subscribe = new Subscribe(firstName, lastName, email, street, city, state);
   this.clickedAdd.emit(addSubscription);
  }

  constructor() { }

  ngOnInit() {
  }

}
