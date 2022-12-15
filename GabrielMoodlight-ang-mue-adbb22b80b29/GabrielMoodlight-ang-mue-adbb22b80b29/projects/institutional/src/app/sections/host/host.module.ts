import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostComponent } from './host.component';
import { TextBlockBtnModule } from '../../components/text-block-btn/text-block-btn.module';

@NgModule({
  declarations: [
    HostComponent
  ],
  imports: [
    CommonModule,
		TextBlockBtnModule
  ],
  exports: [
    HostComponent
  ],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	]
})
export class HostModule { }
