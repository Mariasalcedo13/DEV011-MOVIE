import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent} from './views/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ViewsComponent } from './views/views/views.component';
import { ButtonComponent } from './components/button/button.component';
import { FilterComponent } from './components/filter/filter.component';
import { PaginadorComponent } from './components/paginador/paginador.component';
import { RatingComponent } from './components/rating/rating.component';
import { SortByComponent } from './components/sort-by/sort-by.component';
import { FooterComponent } from './components/footer/footer.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ViewsComponent,
    ButtonComponent,
    FilterComponent,
    PaginadorComponent,
    RatingComponent,
    SortByComponent,
    HomeComponent,
    FooterComponent,
    
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
