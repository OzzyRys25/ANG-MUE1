import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ComingService } from '../../services/coming.service';

@Component({
  selector: 'app-coming',
  templateUrl: './coming.component.html',
  styleUrls: ['./coming.component.scss'],
	animations: [
		trigger('fade', [
			transition(':enter', [
				style({ opacity: 0 }),
				animate('0.3s', style({ opacity: 1}))
			]),
			transition(':leave', [
				style({ opacity: 1 }),
				animate('0.3s', style({ opacity: 0 }))
			])
		])
	]
})
export class ComingComponent implements OnInit {

	@HostListener('window:keydown.esc', ['$event'])
	handleKeyDown(event: KeyboardEvent) {
		this.comingService.changeVisibility(false);
	}

	@Input() visible = false as boolean;

  constructor(
		private comingService: ComingService
	) { }

  ngOnInit(): void {
  }

	close() {
		this.comingService.changeVisibility(false);
	}

}
