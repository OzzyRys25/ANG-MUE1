import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { MatIconModule } from '@angular/material/icon';
import { TitleModule } from '../../components/title/title.module';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
		TitleModule,
    MatIconModule
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
