import {Component, HostBinding, Input} from '@angular/core';

import { Book } from '@bookstore/core/types/entities';

interface IBookAction {
  name: string;
  URL: string;
}

@Component({
  selector: '[book-tile]',
  templateUrl: './book-tile.component.html',
  styleUrls: ['./book-tile.component.css']
})
export class BookTileComponent {

  @Input() book: Book;
  @Input() actions: IBookAction[];
  @Input() @HostBinding('class.compact') compact = false;

  canShowPublisher(): boolean {
    return !this.compact;
  }

  canShowYear(): boolean {
    return !this.compact;
  }

  canShowEdition(): boolean {
    return !this.compact;
  }

  canShowGenre(): boolean {
    return true;
  }

  canShowPages(): boolean {
    return !this.compact;
  }

  canShowPrice(): boolean {
    return true;
  }

  getBookDescription(book: Book): string {
    return this.compact ? book.annotation : book.description;
  }
}
