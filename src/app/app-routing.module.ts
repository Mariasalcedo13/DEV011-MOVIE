import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsComponent } from './views/views/views.component';
import { HomeComponent } from './views/home/home.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'views', component:ViewsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
