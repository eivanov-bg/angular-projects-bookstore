import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BookRepository } from '@bookstore/core/types/interfaces';
import { BookRepositoryImpl } from '@bookstore/infrastructure/types';
import { BookApiService, BookApiServiceImpl } from '@bookstore/infrastructure/services';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: BookRepository, useClass: BookRepositoryImpl},
    { provide: BookApiService, useClass: BookApiServiceImpl }
  ]
})
export class InfrastructureModule { }
