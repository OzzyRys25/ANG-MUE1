import { TitleModule } from './../title/title.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComingComponent } from './coming.component';



@NgModule({
  declarations: [
    ComingComponent
  ],
  imports: [
    CommonModule,
		TitleModule
  ],
  exports: [
    ComingComponent
  ]
})
export class ComingModule { }
