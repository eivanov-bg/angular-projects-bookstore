import {Component, HostBinding, Input} from '@angular/core';

import { BookCollection } from '@bookstore/core/types/collections';

@Component({
  selector: 'app-book-tile-container',
  templateUrl: './book-tile-container.component.html',
  styleUrls: ['./book-tile-container.component.css']
})
export class BookTileContainerComponent {
  @Input() books: BookCollection;
}
