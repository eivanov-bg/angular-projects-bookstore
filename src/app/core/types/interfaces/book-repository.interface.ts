import { Observable } from 'rxjs';
import { Book } from '@bookstore/core/types/entities';
import { BookCollection } from '@bookstore/core/types/collections';
import { BookSearchConditions } from '@bookstore/core/types/query';

/**
 * Book repository
 */
export abstract class BookRepository {
  /**
   * Fetch one book from the datastore
   * @ISBN
   */
  abstract getOne(ISBN: string): Observable<Book>;

  /**
   * Fetch all books from the datastore
   */
  abstract getAll(searchConditions?: BookSearchConditions): Observable<BookCollection>;
}
