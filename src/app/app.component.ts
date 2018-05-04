import { Component } from '@angular/core';
import { News } from './models/newYorker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public fullArticle: boolean = false;
  currentTime = new Date();
   month: number = this.currentTime.getMonth() + 1;
   day: number = this.currentTime.getDate();
   year: number = this.currentTime.getFullYear()

  articles: News [] = [
    new News('https://images.unsplash.com/photo-1524519037505-9839d97603fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=65191e4ba72a3f8612947bebb400e1af&auto=format&fit=crop&w=1650&q=80', 'Nearly a year and a half later Trump still runs his businesses', 'Jackie Shultz', 'Trump\'s children run his businesses for him, but how involved is the President?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel efficitur risus. Maecenas et viverra dolor, feugiat dignissim ipsum. Fusce interdum ante vitae est bibendum, ut tempor tortor suscipit. Morbi in pharetra justo. Integer sed neque et justo porta aliquam et vel odio. Integer risus justo, blandit sit amet accumsan ac, finibus ac elit. Proin pellentesque tincidunt lorem eu bibendum. Phasellus efficitur, libero nec rutrum malesuada, urna arcu auctor felis, ut cursus elit sem ac est. Cras tempor placerat elit, in laoreet velit varius vitae.'),
    new News('https://upload.wikimedia.org/wikipedia/commons/3/3e/Kim_Jong-un_at_the_Workers%27_Party_of_Korea_main_building.png', 'Kim Jong Un plays nice with South Korea', 'Henry Dunkin', 'What does the historic meeting between North and South Korean leaders mean for the rest of the world?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel efficitur risus. Maecenas et viverra dolor, feugiat dignissim ipsum. Fusce interdum ante vitae est bibendum, ut tempor tortor suscipit. Morbi in pharetra justo. Integer sed neque et justo porta aliquam et vel odio. Integer risus justo, blandit sit amet accumsan ac, finibus ac elit. Proin pellentesque tincidunt lorem eu bibendum. Phasellus efficitur, libero nec rutrum malesuada, urna arcu auctor felis, ut cursus elit sem ac est. Cras tempor placerat elit, in laoreet velit varius vitae.'),
    new News('https://media.newyorker.com/photos/5aeb507c79f6430aaa0f9cbd/4:3/w_284,c_limit/Davidson-Rudy.jpg', 'guiliani and the desperate campaign to protect trump', 'Adam Davidson', 'Guiliani makes huge fumble on Sean Hannity\'s show and the Trump team scramble to explain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel efficitur risus. Maecenas et viverra dolor, feugiat dignissim ipsum. Fusce interdum ante vitae est bibendum, ut tempor tortor suscipit. Morbi in pharetra justo. Integer sed neque et justo porta aliquam et vel odio. Integer risus justo, blandit sit amet accumsan ac, finibus ac elit. Proin pellentesque tincidunt lorem eu bibendum. Phasellus efficitur, libero nec rutrum malesuada, urna arcu auctor felis, ut cursus elit sem ac est. Cras tempor placerat elit, in laoreet velit varius vitae.'),
    new News('https://media.newyorker.com/photos/5ae711f5b9b48d7e3cb169c6/4:3/w_930,c_limit/gessen-wolf-whcd.jpg', 'How Michelle Wolf Blasted Open the Fictions of Trump Era Journalism', 'Masha Gessen', 'Her routine at the White House Correspondents\’ Association dinner was only as obscene as the Presidency itself', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel efficitur risus. Maecenas et viverra dolor, feugiat dignissim ipsum. Fusce interdum ante vitae est bibendum, ut tempor tortor suscipit. Morbi in pharetra justo. Integer sed neque et justo porta aliquam et vel odio. Integer risus justo, blandit sit amet accumsan ac, finibus ac elit. Proin pellentesque tincidunt lorem eu bibendum. Phasellus efficitur, libero nec rutrum malesuada, urna arcu auctor felis, ut cursus elit sem ac est. Cras tempor placerat elit, in laoreet velit varius vitae.')
  ];
  //
  readMore() {
    console.log('hi');
  }
  constructor() { }

  ngOnInit() {
  }
}
