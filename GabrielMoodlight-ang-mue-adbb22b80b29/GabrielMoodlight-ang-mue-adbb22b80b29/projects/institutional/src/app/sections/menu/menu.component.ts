import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, HostListener } from '@angular/core';
import { ComingService } from '../../services/coming.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
	animations: [
		trigger('upHeight', [
			state('void', style({
					height: '0'
			})),
			//element being added into DOM.
			transition(':enter', [
					animate('300ms ease-out', style({
							height: '*'
					}))
			]),
			//element being removed from DOM.
			transition(':leave', [
					animate('300ms ease-in', style({
							height: '0'
					}))
			])
		]),
	]
})
export class MenuComponent implements OnInit {

	@HostListener('window:scroll', ['$event'])
	onScroll() {
		if (this.modals.panels.visible) {
			this.togglePanelModal();
		}
	}

	modals = {
		panels: {
			visible: false
		}
	};

  constructor(
		private comingService: ComingService
	) { }

  ngOnInit(): void {
  }

	/**
	 * Método responsável por direcionar a navegação do menu
	 * @param type Tipo de navegação: section | route
	 * @param destiny Destino da navegação: nome da section ou rota a ser direcionada
	 * @param target Alvo atual do evento

	 */

	navigate(
		type: string,
		destiny: string,
		target?: HTMLElement
	) {
		if (type === 'section') {
			this.goToSection(destiny);
		}

		if (target) {
			this.selectMenuItem(target);
		}
	}

	/**
	 * Método responsável por scrollar o usuário até a section selecionada
	 * @param section Nome da section
	 */

	private goToSection(section: string) {
		const sectionRef = document.querySelector(`.${section}`) as HTMLElement;

		const topSection = sectionRef.offsetTop;

		window.scrollTo({
			top: topSection - 65,
			behavior: 'smooth'
		});	
	}

	private selectMenuItem(target: HTMLElement) {
		const itemSelected = document.querySelector('.menu__nav__list__item.active');

		if (itemSelected) {
			itemSelected.classList.remove('active');
		}

		target.classList.add('active');
	}

	togglePanelModal() {
		this.modals.panels.visible = !this.modals.panels.visible;
	}

	openPanel(panel: string) {
		this.comingService.changeVisibility(true);
	}

}
