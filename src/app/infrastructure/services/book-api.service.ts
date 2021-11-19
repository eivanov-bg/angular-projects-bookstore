import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { BookSearchConditions } from '@bookstore/core/types/query';

export abstract class BookApiService {
  /**
   * Fetch the details for single book, identified by its identity (ISBN)
   * @ISBN
   */
  abstract getOne(ISBN: string): Observable<any>;
  /**
   * GET request to fetch books from our REST API
   */
  abstract getMany(searchConditions?: BookSearchConditions): Observable<any>;
}

@Injectable()
export class BookApiServiceImpl extends BookApiService {
  private readonly URL = 'http://localhost:3000/books';

  constructor(protected httpClient: HttpClient) {
    super();
  }

  /**
   * @inheritDoc
   */
  getMany(searchConditions?: BookSearchConditions): Observable<any> {
    // ToDo: Make the URL configurable (introduce config services

    const params = !searchConditions.isEmpty() ? {params: {title: searchConditions.title}} : undefined;

    return this.httpClient.get(this.URL, params);
  }

  /**
   * inheritDoc
   */
  getOne(ISBN: string): Observable<any> {
    return this.httpClient.get(`${this.URL}/${ISBN}`);
  }
}
