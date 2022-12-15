import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu.component';

import { MatIconModule } from '@angular/material/icon';
import { TitleModule } from '../../components/title/title.module';
import { BtnModule } from '../../components/btn/btn.module';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
		MatIconModule,
		TitleModule,
		BtnModule
  ],
  exports: [
    MenuComponent
  ],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	]
})
export class MenuModule { }
