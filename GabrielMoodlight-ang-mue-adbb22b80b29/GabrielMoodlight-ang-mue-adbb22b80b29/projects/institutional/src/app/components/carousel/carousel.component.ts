import { CarouselModel } from './carousel.model';
import { Component, Input, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ComingService } from '../../services/coming.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {

	@Input() type: 'marcations' | 'destinations';
	@Input() data: CarouselModel;
	@Input() small = false as boolean;
	@Input() orientation = 'landscape' as 'landscape' | 'portrait'; 

	@ViewChild('carousel') carouselRef: ElementRef;

	carousel: HTMLElement;
	animation = false as boolean;

	images: string[];

	current = 0 as number;

	active: {
		image: Element,
		bullet: Element
	};

  constructor(
		private comingService: ComingService
	) { }

  ngOnInit(): void {
  }

	ngAfterViewInit() {
		this.carousel = this.carouselRef.nativeElement;
		this.images = this.data[this.type].map((item) => item.image);

		this.setInitialOrder();
	}

	private setInitialOrder() {
		const items = Array.from(this.carousel.querySelectorAll('.carousel__item'));

		items.forEach((item: HTMLElement, ind: number) => {

			if (ind === items.length - 1) {
				item.style.order = String(-1);
			} else if (ind === items.length - 2) {
				item.style.order = String(-2);
			} else {
				item.style.order = String(ind);
			}
		})
	}
	
	handleDirection(direction: 'prev' | 'next') {
		if (!this.animation) {
			this.animation = true;
			this.scrollContent(direction);
			this.handleAnimationItems(direction);
		}
	}

	handleImage(target: HTMLElement) {
		if (target.classList.contains('carousel__item__image') || target.classList.contains('carousel__item__info')) {
			target = target.parentElement;
		} else {
			target = target;
		}

		const order = parseInt(getComputedStyle(target).order);

		if (order > 0) {
			this.handleDirection('next');
		} else if (order < 0) {
			this.handleDirection('prev');
		} else {
			this.comingService.changeVisibility(true);
		}

	}

	private scrollContent(direction: 'prev' | 'next') {
		const content = this.carousel.querySelector('.carousel__content') as HTMLElement;
		const item = this.carousel.querySelector('.carousel__item.active') as HTMLElement;

		const contentStyle = getComputedStyle(content);
		const itemStyle = getComputedStyle(item);

		const currentLeft = parseFloat(contentStyle.marginLeft);

		let width = item.offsetWidth;
		width += parseInt(itemStyle.marginLeft) + parseInt(itemStyle.marginRight);
		width = direction === 'next' ? width * -1 : width;

		content.classList.add('animated');
		content.style.marginLeft = currentLeft + width + 'px';
	}

	private handleAnimationItems(direction: 'prev' | 'next') {
		const items = Array.from(this.carousel.querySelectorAll('.carousel__item')) as HTMLElement[];
		const content = this.carousel.querySelector('.carousel__content');

		this.handleActiveItem(items, direction);

		setTimeout(() => {
			content.classList.remove('animated');

			this.handleOrderItems(items, direction);

			content.removeAttribute('style');
			this.animation = false;
		}, 300);

	}

	private handleActiveItem(items: HTMLElement[], direction: 'prev' | 'next') {
		const currentActive = this.carousel.querySelector('.carousel__item.active');
		const currentOrder = parseInt(getComputedStyle(currentActive).order);

		if (direction === 'next') {

			items.forEach((item: HTMLElement) => {
				const order = parseInt(getComputedStyle(item).order);

					if (order === currentOrder) {
						item.classList.remove('active');
					}

					if (order === currentOrder + 1) {
						item.classList.add('active');
					}
			});
		}

		if (direction === 'prev') {
			items.forEach((item: HTMLElement) => {
				const order = parseInt(getComputedStyle(item).order);

					if (order === currentOrder) {
						item.classList.remove('active');
					}

					if (order === currentOrder - 1) {
						item.classList.add('active');
					}
			});
		}
	}

	private handleOrderItems(items: HTMLElement[], direction: 'prev' | 'next') {
		if (direction === 'next') {
		
			items.forEach((item: HTMLElement) => {
				const order = parseInt(item.style.order);

				if (order === -2) {
					item.style.order = String(items.length - 3);
				} else {
					item.style.order = String(order - 1);
				}

			});
		}

		if (direction === 'prev') {
			items.forEach((item: HTMLElement) => {
				const order = parseInt(item.style.order);

				if (order + 3 === items.length) {
					item.style.order = String(-2);
				} else {
					item.style.order = String(order + 1);
				}
			});
		}
	}

}
