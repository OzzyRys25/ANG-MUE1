import { ComingService } from './../../services/coming.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnInit {

  constructor(
		private comingService: ComingService
	) { }

  ngOnInit(): void {
  }

	openModal() {
		this.comingService.changeVisibility(true);
	}

}
