import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

import { CoreModule } from '@bookstore/core/core.module';
import { SharedModule } from '@bookstore/shared/shared.module';
import { DashboardComponent } from '@bookstore/presentation/pages/dashboard/dashboard.component';
import { HeaderComponent } from '@bookstore/presentation/components/header/header.component';
import { FooterComponent } from '@bookstore/presentation/components/footer/footer.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { SingleBookComponent } from './pages/single-book/single-book.component';
import { LoginComponent } from '@bookstore/presentation/pages/login/login.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SingleBookComponent,
    LoginComponent
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
    MatButtonModule,
    FormsModule
  ],
  providers: [
  ],
  exports: [ DashboardComponent, HeaderComponent, FooterComponent, SingleBookComponent ]
})

export class PresentationModule { }
