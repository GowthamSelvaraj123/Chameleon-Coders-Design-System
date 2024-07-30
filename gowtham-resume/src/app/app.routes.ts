import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModuleModule } from './app.module';
export const routes: Routes = [
    { path: '', loadChildren: () => import('./app.module').then(m => m.AppModuleModule)},
//    { path: 'dashboard', component: AppComponent },
    { path: '**', redirectTo: '' }  // Redirect to home on unknown routes
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
export class AppRoutingModule { }
