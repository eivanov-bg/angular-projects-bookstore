import { Injectable} from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { debounceTime, mergeMap, startWith } from 'rxjs/operators';

import { Book } from '@bookstore/core/types/entities';
import { BookCollection } from '@bookstore/core/types/collections';
import { BookRepository } from '@bookstore/core/types/interfaces';
import { BookSearchConditions } from '@bookstore/core/types/query';

export abstract class BookService {
  /**
   * Get one book by its identity (ISBN)
   * @ISBN
   */
  abstract getOne(ISBN: string): Observable<Book>;

  /**
   * Fetch all books from data store/repository
   */
  abstract getAll(): Observable<BookCollection>;

  /**
   * Fetch the data according to new search conditions
   * @searchConditions
   */
  abstract applySearchConditions(searchConditions: BookSearchConditions): void;

  /**
   * Apply search condition to filter the books by title
   * @title
   */
  abstract searchByTitle(title: string): void;
}

@Injectable()
export class BookServiceImpl extends BookService {
  private searchConditions$ = new Subject<BookSearchConditions>();

  constructor(protected bookRepository: BookRepository) {
    super();
  }

  /**
   * @inheritDoc
   */
  getAll(): Observable<BookCollection> {
    return this.searchConditions$.pipe(
      startWith(BookSearchConditions.createEmpty()),
      debounceTime(500),
      mergeMap((searchConditions) => this.bookRepository.getAll(searchConditions))
    );
  }

  /**
   * @inheritDoc
   */
  applySearchConditions(searchConditions: BookSearchConditions): void {
    this.searchConditions$.next(searchConditions);
  }

  /**
   * @inheritDoc
   */
  searchByTitle(title: string): void {
    this.applySearchConditions(new BookSearchConditions(title));
  }

  /**
   * inheritDoc
   */
  getOne(ISBN: string): Observable<Book> {
    return this.bookRepository.getOne(ISBN);
  }
}
