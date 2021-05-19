import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { TodoComponent } from '../todo/todo.component';
import { TodoEditComponent } from '../todo/todo-edit/todo-edit.component';
import { TodoListComponent } from '../todo/todo-list/todo-list.component';

// Routes
const appRoutes: Routes = [  
  { path: '', component: TodoListComponent },
  { path: 'edit/:id', component: TodoEditComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
