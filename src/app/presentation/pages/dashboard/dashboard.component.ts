import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BookService } from '@bookstore/core/services';
import { BookCollection } from '@bookstore/core/types/collections';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books: Observable<BookCollection>;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getAll();
  }
}
