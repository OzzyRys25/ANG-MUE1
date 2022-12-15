import { CarouselModel } from './../../components/carousel/carousel.model';
import { Component, OnInit } from '@angular/core';
import { ComingService } from '../../services/coming.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

	carouselData: CarouselModel;

  constructor(
		private comingService: ComingService
	) { }

  ngOnInit(): void {
		const info = {
			image: '/assets/images/example.png',
			locale: 'São Paulo',
			distance: 8
		};

		this.carouselData = {
			destinations: []
		};

		for (let i = 0; i < 5; i++) {
			this.carouselData.destinations.push(info);
		}
  }

	openModal() {
		this.comingService.changeVisibility(true);
	}

}
