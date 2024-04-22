import { Pipe, PipeTransform } from "@angular/core";

// fernado // toggleCase = 'FERNADO'
// FERNANDO // toggleCase = 'fernado'

@Pipe({
  name:'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {

  transform( value: string, toUpper: boolean = false) {
    return ( toUpper )
      ? value.toUpperCase()
      : value.toLowerCase();
  }

}
