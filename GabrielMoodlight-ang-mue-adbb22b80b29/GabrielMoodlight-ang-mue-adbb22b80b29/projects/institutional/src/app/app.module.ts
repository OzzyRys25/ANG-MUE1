import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComingModule } from './components/coming/coming.module';
import { AboutModule } from './sections/about/about.module';
import { HomeModule } from './sections/home/home.module';
import { HostModule } from './sections/host/host.module';
import { HowToWorkModule } from './sections/how-to-work/how-to-work.module';
import { MenuModule } from './sections/menu/menu.module';
import { ReviewModule } from './sections/review/review.module';
import { UserModule } from './sections/user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
		MenuModule,
		HomeModule,
		UserModule,
		HostModule,
		ReviewModule,
		AboutModule,
		HowToWorkModule,
		ComingModule,
		BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	]
})
export class AppModule { }
