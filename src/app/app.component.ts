import { Component } from '@angular/core';
import { News } from './models/newYorker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'New Yorker';
  newsArticles: News [] = [
    new News('https://images.unsplash.com/photo-1524519037505-9839d97603fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=65191e4ba72a3f8612947bebb400e1af&auto=format&fit=crop&w=1650&q=80', 'Nearly a year and a half later Trump still runs his businesses', 'Jackie Shultz', 'Trump\'s children run his businesses for him, but how involved is the President?')
  ];
  constructor() { }

  ngOnInit() {
  }
}
