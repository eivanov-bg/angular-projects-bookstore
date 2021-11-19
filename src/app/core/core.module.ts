import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookService, BookServiceImpl } from '@bookstore/core/services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: BookService, useClass: BookServiceImpl }
  ]
})
export class CoreModule { }
