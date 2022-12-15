import { Component, OnInit } from '@angular/core';

interface ContactModel {
		label: string;
		url: string;
		icon: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	contacts = [
		{
			label: '@maisum.esportes',
			url: 'https://www.instagram.com/maisum.esportes/',
			icon: 'instagram' // -> Consulte o nome do icon em https://fontawesome.com/
		},
		{
			label: 'facebook.com/maisumesportes',
			url: 'https://www.facebook.com/maisumesportes/',
			icon: 'facebook' // -> Consulte o nome do icon em https://fontawesome.com/
		},
		{
			label: 'maisumesportes@gmail.com',
			url: 'mailto:maisumesportes@gmail.com',
			icon: 'envelope' // -> Consulte o nome do icon em https://fontawesome.com/
		}
	] as ContactModel[];

  constructor() { }

  ngOnInit(): void {
  }

	getContactIcon(icon: string) {
		return `fa fa-${icon}`;
	}

}
