import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'dashboard', component: AppComponent },
    { path: '**', redirectTo: '' }  // Redirect to home on unknown routes
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
export class AppRoutingModule { }
