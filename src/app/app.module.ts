import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '@bookstore/app-routing.module';

import { AppComponent } from '@bookstore/app.component';
import { CoreModule } from '@bookstore/core/core.module';
import { InfrastructureModule } from '@bookstore/infrastructure/infrastructure.module';
import { PresentationModule } from '@bookstore/presentation/presentation.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    InfrastructureModule,
    PresentationModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
