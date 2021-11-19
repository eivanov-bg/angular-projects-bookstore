import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import {AppModule} from '@bookstore/app.module';

@Injectable()
export class LoadingService {
  private _loading = new BehaviorSubject<boolean>(false);

  public readonly loading$ = this._loading.asObservable();

  constructor() {}

  /**
   * Display loading spinner
   */
  show(): void {
    this._loading.next(true);
  }

  /**
   * Hide the loading spinner
   */
  hide(): void {
    this._loading.next(false);
  }
}
