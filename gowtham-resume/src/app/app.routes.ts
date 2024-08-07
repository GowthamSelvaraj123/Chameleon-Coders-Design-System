import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGroupComponentComponent } from './components/list-group-component/list-group-component.component';
export const routes: Routes = [
    { path: '', component: ListGroupComponentComponent},
    { path: 'dashboard', loadChildren: () => import('./components/list-group-component/list-module.module').then(m => m.ListModuleModule)},
    { path: 'home', loadChildren: () => import('./components/all-components/all-component.module').then(m => m.AllComponentModule)},
    { path: '**', redirectTo: '' }  // Redirect to home on unknown routes
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
   
export class AppRoutingModule { }
