import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class canFlyPipe implements PipeTransform {
  transform(fly: any): 'vuela' | 'no vuela' {
    return ( fly ) ? 'vuela' : 'no vuela';
  }
}
