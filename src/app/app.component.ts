import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {}
}
