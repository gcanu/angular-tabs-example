import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Output() tabChange: EventEmitter<void>;

  constructor() {
    this.tabChange = new EventEmitter<void>();
  }

  onTabChanged() {
    this.tabChange.emit();
  }
}
