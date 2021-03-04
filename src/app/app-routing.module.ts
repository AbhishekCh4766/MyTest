import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteLayoutComponent } from './_layouts/site-layout/site-layout.component';
import { CrudComponent } from './crud/crud.component';
import { AddTaskComponent } from './add-task/add-task.component';

const routes: Routes = [
  {    path: '',
        component: SiteLayoutComponent, 
        children: [
          { path: '',  component: CrudComponent , pathMatch:'full' },
          { path: 'add-task',  component: AddTaskComponent , pathMatch:'full' },
        
        ]

   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
