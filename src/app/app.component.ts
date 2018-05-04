import { Component } from '@angular/core';
import { News } from './models/newYorker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'New Yorker';
  articles: News [] = [
    new News('https://images.unsplash.com/photo-1524519037505-9839d97603fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=65191e4ba72a3f8612947bebb400e1af&auto=format&fit=crop&w=1650&q=80', 'Nearly a year and a half later Trump still runs his businesses', 'Jackie Shultz', 'Trump\'s children run his businesses for him, but how involved is the President?'),
    new News('https://upload.wikimedia.org/wikipedia/commons/3/3e/Kim_Jong-un_at_the_Workers%27_Party_of_Korea_main_building.png', 'Kim Jong Un plays nice with South Korea', 'Henry Dunkin', 'What does the historic meeting between North and South Korean leaders mean for the rest of the world?')
  ];
  constructor() { }

  ngOnInit() {
  }
}
