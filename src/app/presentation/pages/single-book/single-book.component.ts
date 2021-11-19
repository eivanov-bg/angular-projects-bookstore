import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { BookService } from '@bookstore/core/services';
import { Book } from '@bookstore/core/types/entities';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {
  book$: Observable<Book>;

  constructor(private route: ActivatedRoute, private bookService: BookService) {
    // No-Op
  }

  ngOnInit(): void {
    const ISBN = this.route.snapshot.paramMap.get('ISBN');
    this.book$ = this.bookService.getOne(ISBN);
  }

}
