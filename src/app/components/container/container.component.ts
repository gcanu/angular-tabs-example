import { Component } from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  clear$: Subject<void>;

  constructor() {
    this.clear$ = new Subject<void>();
  }

  clearComponent() {
    this.clear$.next();
  }
}
