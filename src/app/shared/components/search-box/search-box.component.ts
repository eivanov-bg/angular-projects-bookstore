import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @Input() placeholder: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  searchValueChanged($event: KeyboardEvent): void {
    this.valueChange.emit(($event.target as HTMLInputElement).value);
  }
}
