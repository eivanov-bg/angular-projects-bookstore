import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { BookService } from '@bookstore/core/services';
import { LoginComponent } from '@bookstore/presentation/components/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private bookService: BookService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  searchTitleChanged($event: string): void {
    this.bookService.searchByTitle($event);
  }

  login(): void {
    this.openLoginDialog();
  }

  protected openLoginDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = 300;

    this.dialog.open(LoginComponent, dialogConfig);
  }
}
