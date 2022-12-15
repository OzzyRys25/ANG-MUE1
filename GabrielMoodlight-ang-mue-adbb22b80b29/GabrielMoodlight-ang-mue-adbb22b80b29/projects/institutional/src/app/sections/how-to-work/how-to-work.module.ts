import { TitleModule } from './../../components/title/title.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HowToWorkComponent } from './how-to-work.component';


@NgModule({
  declarations: [
    HowToWorkComponent
  ],
  imports: [
    CommonModule,
		TitleModule
  ],
  exports: [
    HowToWorkComponent
  ]
})
export class HowToWorkModule { }
