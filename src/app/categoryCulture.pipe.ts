import {Pipe, PipeTransform} from '@angular/core';
import { News } from './models/newYorker.model';


@Pipe({
  name: "categoryCulture",
  pure: false
})

export class CategoryCulturePipe implements PipeTransform {
  transform(input: News[], args) {

    let output: News[] = [];
    for(let i = 0; i < input.length; i++) {
      if (input[i].category === 'culture') {
        output.push(input[i]);
      }
    }
    return output;
  }
}
