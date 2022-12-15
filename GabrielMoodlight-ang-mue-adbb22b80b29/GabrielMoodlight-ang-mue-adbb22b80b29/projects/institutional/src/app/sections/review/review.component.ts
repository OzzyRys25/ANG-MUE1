import { Component, OnInit } from '@angular/core';
import { CarouselModel } from '../../components/carousel/carousel.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

	carouselData: CarouselModel;

  constructor() { }

  ngOnInit(): void {
		const info = {
			image: '/assets/images/example.png',
			tag: '@maisumesportes'
		}

		const info2 = {
			image: '/assets/images/host_bg.jpg',
			tag: '@maisumesportes'
		}


		this.carouselData = {
			marcations: []
		};

		for (let i = 0; i < 5; i++) {
			this.carouselData.marcations.push(info);
		}

		for (let i = 0; i < 5; i++) {
			this.carouselData.marcations.push(info2);
		}

  }

}
