import { Component, OnInit } from '@angular/core';
import { LoadingService } from './presentation/services/loading.service';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <footer></footer>`,
  styles : []
})
export class AppComponent implements OnInit {
  title = 'Book Collection App';
  // loading$ = this.loader.loading$;

  constructor(private loader: LoadingService) {
    // No-Op
  }

  ngOnInit(): void {}
}
