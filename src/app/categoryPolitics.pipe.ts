import {Pipe, PipeTransform} from '@angular/core';
import { News } from './models/newYorker.model';
// import { PoliticsComponent } from './politics/politics.component';

@Pipe({
  name: "categoryPolitics",
  pure: false
})

export class CategoryPoliticsPipe implements PipeTransform {
  transform(input: News[], args) {

    let output: News[] = [];
    for(let i = 0; i < input.length; i++) {
      if (input[i].category === 'politics') {
        output.push(input[i]);
      }
    }
    return output;
  }
}
