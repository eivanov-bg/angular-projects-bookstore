import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

export abstract class AuthService {
  /**
   * Login and store access token
   * @username
   * @password
   */
  abstract login(username: string, password: string): Observable<boolean>;

  /**
   * Remove the access token
   */
  abstract logout(): void;

  /**
   * Check if the user is authenticated
   */
  abstract get loggedIn(): boolean;
}

@Injectable()
export class AuthServiceImpl extends AuthService {
  constructor(private http: HttpClient) {
    super();
  }

  /**
   * inheritDoc
   */
  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{token: string}>('http://localhost:3000/auth', { username, password })
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          return true;
        })
      );
  }

  /**
   * inheritDoc
   */
  logout(): void {
    localStorage.removeItem('access_token');
  }

  /**
   * inheritDoc
   */
  get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}
