import { Component, OnInit } from '@angular/core';
import { ComingService } from '../../services/coming.service';

@Component({
  selector: 'app-how-to-work',
  templateUrl: './how-to-work.component.html',
  styleUrls: ['./how-to-work.component.scss']
})
export class HowToWorkComponent implements OnInit {
	
	videos = [{
		src: 'https://youtube.com/embed/u548qyxRTBU',
		type: 'mp4'
	}, {
		src: 'https://youtube.com/embed/u548qyxRTBU',
		type: 'mp4'
	}];

  constructor(
		private comingService: ComingService
	) { }

  ngOnInit(): void {
  }

	getVideoType(type: string) {
		return `video/${type}`;
	}

	playVideo() {
		this.comingService.changeVisibility(true);
	}
}
