import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComingService {

	visibility = new Subject<boolean>();
	asVisibility = this.visibility.asObservable();

  constructor() { }

	changeVisibility(change: boolean) {
		this.visibility.next(change);
	}
}
