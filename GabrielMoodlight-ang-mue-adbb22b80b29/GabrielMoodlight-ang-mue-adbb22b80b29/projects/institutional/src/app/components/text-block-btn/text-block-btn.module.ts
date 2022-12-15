import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBlockBtnComponent } from './text-block-btn.component';
import { BtnModule } from '../btn/btn.module';



@NgModule({
  declarations: [
    TextBlockBtnComponent
  ],
  imports: [
    CommonModule,
    BtnModule
  ],
  exports: [
    TextBlockBtnComponent
  ], 
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class TextBlockBtnModule { }

