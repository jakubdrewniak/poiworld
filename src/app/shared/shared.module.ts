import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { PoiTypePipe } from './poi-type.pipe';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    StarComponent,
    ConvertToSpacesPipe,
    PoiTypePipe
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    ConvertToSpacesPipe,
    PoiTypePipe
  ]
})
export class SharedModule { }
