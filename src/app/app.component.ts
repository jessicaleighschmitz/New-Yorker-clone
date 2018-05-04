import { Component } from '@angular/core';
import { News } from './models/newYorker.model';
import { Culture } from './models/culture.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: News [] = [
    new News('https://images.unsplash.com/photo-1524519037505-9839d97603fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=65191e4ba72a3f8612947bebb400e1af&auto=format&fit=crop&w=1650&q=80', 'Nearly a year and a half later Trump still runs his businesses', 'Jackie Shultz', 'Trump\'s children run his businesses for him, but how involved is the President?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel efficitur risus. Maecenas et viverra dolor, feugiat dignissim ipsum. Fusce interdum ante vitae est bibendum, ut tempor tortor suscipit. Morbi in pharetra justo. Integer sed neque et justo porta aliquam et vel odio. Integer risus justo, blandit sit amet accumsan ac, finibus ac elit. Proin pellentesque tincidunt lorem eu bibendum. Phasellus efficitur, libero nec rutrum malesuada, urna arcu auctor felis, ut cursus elit sem ac est. Cras tempor placerat elit, in laoreet velit varius vitae.'),
    new News('https://upload.wikimedia.org/wikipedia/commons/3/3e/Kim_Jong-un_at_the_Workers%27_Party_of_Korea_main_building.png', 'Kim Jong Un plays nice with South Korea', 'Henry Dunkin', 'What does the historic meeting between North and South Korean leaders mean for the rest of the world?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel efficitur risus. Maecenas et viverra dolor, feugiat dignissim ipsum. Fusce interdum ante vitae est bibendum, ut tempor tortor suscipit. Morbi in pharetra justo. Integer sed neque et justo porta aliquam et vel odio. Integer risus justo, blandit sit amet accumsan ac, finibus ac elit. Proin pellentesque tincidunt lorem eu bibendum. Phasellus efficitur, libero nec rutrum malesuada, urna arcu auctor felis, ut cursus elit sem ac est. Cras tempor placerat elit, in laoreet velit varius vitae.'),
    new News('https://media.newyorker.com/photos/5aeb507c79f6430aaa0f9cbd/4:3/w_284,c_limit/Davidson-Rudy.jpg', 'guiliani and the desperate campaign to protect trump', 'Adam Davidson', 'Guiliani makes huge fumble on Sean Hannity\'s show and the Trump team scramble to explain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel efficitur risus. Maecenas et viverra dolor, feugiat dignissim ipsum. Fusce interdum ante vitae est bibendum, ut tempor tortor suscipit. Morbi in pharetra justo. Integer sed neque et justo porta aliquam et vel odio. Integer risus justo, blandit sit amet accumsan ac, finibus ac elit. Proin pellentesque tincidunt lorem eu bibendum. Phasellus efficitur, libero nec rutrum malesuada, urna arcu auctor felis, ut cursus elit sem ac est. Cras tempor placerat elit, in laoreet velit varius vitae.'),
    new News('https://media.newyorker.com/photos/5ae711f5b9b48d7e3cb169c6/4:3/w_930,c_limit/gessen-wolf-whcd.jpg', 'How Michelle Wolf Blasted Open the Fictions of Trump Era Journalism', 'Masha Gessen', 'Her routine at the White House Correspondents\’ Association dinner was only as obscene as the Presidency itself', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel efficitur risus. Maecenas et viverra dolor, feugiat dignissim ipsum. Fusce interdum ante vitae est bibendum, ut tempor tortor suscipit. Morbi in pharetra justo. Integer sed neque et justo porta aliquam et vel odio. Integer risus justo, blandit sit amet accumsan ac, finibus ac elit. Proin pellentesque tincidunt lorem eu bibendum. Phasellus efficitur, libero nec rutrum malesuada, urna arcu auctor felis, ut cursus elit sem ac est. Cras tempor placerat elit, in laoreet velit varius vitae.')
  ];

// cultureArticles: Culture [] = [
//   new Culture('https://media.newyorker.com/photos/5aea0ce3cc919c5bfd60ce87/master/w_1626,c_limit/180514_r32056.jpg', 'Charlize theron explores motherhood\'s discontents in Tully', 'Anthony Lane', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna tortor, suscipit ut tortor quis, fermentum bibendum purus. Aliquam ut velit ut eros eleifend pharetra. Mauris sagittis felis quis dolor cursus, sit amet aliquam turpis aliquam. Praesent bibendum augue massa, eget tincidunt neque sagittis quis. Nulla sit amet rutrum leo. Nullam sit amet dolor bibendum, tristique lorem a, facilisis nunc. Vestibulum ultricies lorem consectetur blandit dictum. Nam facilisis interdum mi nec hendrerit.'),
//   new Culture('https://media.newyorker.com/photos/5ae9c600c66c3836a6b61b8c/4:3/w_558,c_limit/Alt-The-United-States-of-Japan.jpg', 'The United States of Japan', 'Matt Alt', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna tortor, suscipit ut tortor quis, fermentum bibendum purus. Aliquam ut velit ut eros eleifend pharetra. Mauris sagittis felis quis dolor cursus, sit amet aliquam turpis aliquam. Praesent bibendum augue massa, eget tincidunt neque sagittis quis. Nulla sit amet rutrum leo. Nullam sit amet dolor bibendum, tristique lorem a, facilisis nunc. Vestibulum ultricies lorem consectetur blandit dictum. Nam facilisis interdum mi nec hendrerit.'),
//   new Culture('https://media.newyorker.com/photos/5aeb74be5e2f1d21c1007394/4:3/w_608,c_limit/Jackson-Shudu-Gram.jpg', 'shudu gram is a white man\'s digital projection of real life black womanhood', 'Lauren Michele Jackson', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna tortor, suscipit ut tortor quis, fermentum bibendum purus. Aliquam ut velit ut eros eleifend pharetra. Mauris sagittis felis quis dolor cursus, sit amet aliquam turpis aliquam. Praesent bibendum augue massa, eget tincidunt neque sagittis quis. Nulla sit amet rutrum leo. Nullam sit amet dolor bibendum, tristique lorem a, facilisis nunc. Vestibulum ultricies lorem consectetur blandit dictum. Nam facilisis interdum mi nec hendrerit.')
// ];

selectedArticle = null;

  readMore(clickedNews) {
    console.log('hi');
    this.selectedArticle = clickedNews;
  }

  finishedShowing(){
    this.selectedArticle = null;
  }
  constructor() { }

  ngOnInit() {
  }
}
