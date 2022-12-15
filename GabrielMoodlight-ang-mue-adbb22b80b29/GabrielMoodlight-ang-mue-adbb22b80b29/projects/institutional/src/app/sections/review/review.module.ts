import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewComponent } from './review.component';
import { CarouselModule } from '../../components/carousel/carousel.module';
import { TitleModule } from '../../components/title/title.module';


@NgModule({
  declarations: [
    ReviewComponent
  ],
  imports: [
    CommonModule,
		TitleModule,
		CarouselModule
  ],
  exports: [
    ReviewComponent
  ]
})
export class ReviewModule { }
