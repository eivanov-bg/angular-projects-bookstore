import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookService } from '@bookstore/core/services';
import { AuthService } from '@bookstore/infrastructure/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private bookService: BookService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  searchTitleChanged($event: string): void {
    this.bookService.searchByTitle($event);
  }

  get loggedIn(): boolean {
    return this.authService.loggedIn;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
