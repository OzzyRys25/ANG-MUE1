import { Component, Input, OnInit } from '@angular/core';
import { ComingService } from '../../services/coming.service';

@Component({
  selector: 'app-text-block-btn',
  templateUrl: './text-block-btn.component.html',
  styleUrls: ['./text-block-btn.component.scss']
})
export class TextBlockBtnComponent implements OnInit {
  @Input() title= 'Titulo Padrão';
  @Input() btnText='Texto Padrão do Botão';
	@Input() btnAction: Function;
  @Input() inverse: boolean = false;

  constructor(
		private comingService: ComingService
	) { }

  ngOnInit(): void {
  }

}
