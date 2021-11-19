import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';

import { BookTileComponent } from '@bookstore/shared/components/book-tile/book-tile.component';
import { BookTileContainerComponent } from '@bookstore/shared/components/book-tile-container/book-tile-container.component';
import { SearchBoxComponent } from '@bookstore/shared/components/search-box/search-box.component';
import { MatInputModule } from '@angular/material/input';
import { CSVPipe } from '@bookstore/shared/pipes/csv.pipe';
import { LazyImgDirective } from '@bookstore/shared/directives/lazy-img.directive';
import { CurrencyPipe } from '@bookstore/shared/pipes/currency.pipe';
import { FirstPipe } from '@bookstore/shared/pipes/first.pipe';

@NgModule({
  declarations: [
    BookTileComponent,
    BookTileContainerComponent,
    SearchBoxComponent,
    CSVPipe,
    LazyImgDirective,
    CurrencyPipe,
    FirstPipe
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    RouterModule
  ],
  exports: [
    BookTileContainerComponent,
    SearchBoxComponent,
    BookTileComponent
  ]
})
export class SharedModule { }
