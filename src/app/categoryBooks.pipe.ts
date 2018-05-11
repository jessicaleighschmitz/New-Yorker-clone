import {Pipe, PipeTransform} from '@angular/core';
import { News } from './models/newYorker.model';


@Pipe({
  name: "categoryBooks",
  pure: false
})

export class CategoryBooksPipe implements PipeTransform {
  transform(input: News[], args) {

    let output: News[] = [];
    for(let i = 0; i < input.length; i++) {
      if (input[i].category === 'books') {
        output.push(input[i]);
      }
    }
    return output;
  }
}
