import {Injectable} from '@angular/core';

import { Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';

import { BookRepository } from '@bookstore/core/types/interfaces';
import { Book, IBookProps } from '@bookstore/core/types/entities';
import { BookApiService } from '@bookstore/infrastructure/services';
import { BookMapper } from '@bookstore/infrastructure/types/book.mapper';
import { BookCollection } from '@bookstore/core/types/collections';
import {BookSearchConditions} from '@bookstore/core/types/query';

@Injectable()
export class BookRepositoryImpl implements BookRepository {
  constructor(private bookAPI: BookApiService) {
  }

  /**
   * @ inheritDoc
   */
  getOne(ISBN: string): Observable<Book> {
    return this.bookAPI.getOne(ISBN).pipe(
      map( (response: IBookProps) => BookMapper.toDomain(response))
    );
  }

  /**
   * @ inheritDoc
   */
  getAll(searchConditions?: BookSearchConditions): Observable<BookCollection> {
    return this.bookAPI.getMany(searchConditions).pipe(
      map( (response: []) => response.map( (book: IBookProps) => BookMapper.toDomain(book)))
    );
  }
}
