import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';





@NgModule({
  declarations: [
    BodyComponent,
    HeaderComponent,
    
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
