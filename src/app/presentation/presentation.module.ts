import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

import { CoreModule } from '@bookstore/core/core.module';
import { SharedModule } from '@bookstore/shared/shared.module';
import { DashboardComponent } from '@bookstore/presentation/pages/dashboard/dashboard.component';
import { HeaderComponent } from '@bookstore/presentation/components/header/header.component';
import { FooterComponent } from '@bookstore/presentation/components/footer/footer.component';
import { LoginComponent } from '@bookstore/presentation/components/login/login.component';

import { LoadingService } from '@bookstore/presentation/services/loading.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { LoadingInterceptor } from '@bookstore/presentation/interceptors/loading.interceptor';
import { SingleBookComponent } from './pages/single-book/single-book.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SingleBookComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule
  ],
  providers: [
    LoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  exports: [ DashboardComponent, HeaderComponent, FooterComponent, SingleBookComponent ]
})

export class PresentationModule { }
