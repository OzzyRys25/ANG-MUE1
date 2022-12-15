import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { CarouselModule } from '../../components/carousel/carousel.module';
import { TextBlockBtnModule } from '../../components/text-block-btn/text-block-btn.module';
import { ComingModule } from '../../components/coming/coming.module';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
		CarouselModule,
		TextBlockBtnModule,
		ComingModule
  ],
  exports: [
    UserComponent
  ],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	]
})
export class UserModule { }
