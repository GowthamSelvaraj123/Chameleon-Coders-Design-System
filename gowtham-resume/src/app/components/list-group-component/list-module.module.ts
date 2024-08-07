import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListGroupComponentComponent } from './list-group-component.component';
const routes: Routes = [
  { path: '', component: ListGroupComponentComponent }
];
@NgModule({
  declarations: [ListGroupComponentComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
})
export class ListModuleModule { }
