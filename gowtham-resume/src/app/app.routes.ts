import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModuleModule } from './app.module';
import { ListGroupComponentComponent } from './components/list-group-component/list-group-component.component';
import { HeaderComponentComponent } from './components/common/header-component/header-component.component';
export const routes: Routes = [
    { path: '', loadChildren: () => import('./app.module').then(m => m.AppModuleModule)},
    { path: 'home', loadChildren: () => import('./app.module').then(m => m.AppModuleModule)},
    { path: 'dashboard', component: ListGroupComponentComponent },
    { path: '**', redirectTo: '' }  // Redirect to home on unknown routes
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
   
export class AppRoutingModule { }
