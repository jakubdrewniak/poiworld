import { PipeTransform,  Pipe } from '@angular/core';

@Pipe ({name: 'poiType'})
export class PoiTypePipe implements PipeTransform {
  transform(value: number): string {
    switch(value) {
      case 1: return 'Fire'
      case 2: return 'Contact/Juggling'
      case 3: return 'Sock'
      case 4: return 'Other'
      default: value.toString();
    }    
  }
}
