import { Component, OnInit } from '@angular/core';
import { ComingService } from './services/coming.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	comingVisible = false as boolean;

	constructor(
		private comingService: ComingService
	) {

	}

	ngOnInit() {
		this.comingService.asVisibility.subscribe(visible => {
			this.comingVisible = visible;
		})
	}
}
