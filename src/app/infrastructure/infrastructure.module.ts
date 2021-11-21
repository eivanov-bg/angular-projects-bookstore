import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { BookRepository } from '@bookstore/core/types/interfaces';
import { BookRepositoryImpl } from '@bookstore/infrastructure/types';
import { AuthService, AuthServiceImpl, BookApiService, BookApiServiceImpl } from '@bookstore/infrastructure/services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('access_token'),
        allowedDomains: ['localhost:3000'],
        disallowedRoutes: ['localhost:3000/auth']
      }
    })
  ],
  providers: [
    { provide: AuthService, useClass: AuthServiceImpl },
    { provide: BookRepository, useClass: BookRepositoryImpl},
    { provide: BookApiService, useClass: BookApiServiceImpl }
   /* {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthServiceImpl,
      multi: true
    }*/
  ]
})
export class InfrastructureModule { }
