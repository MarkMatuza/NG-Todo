import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';

import { TodoComponent } from './todo/todo.component';
import { TodoEditComponent } from './todo/todo-edit/todo-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from './todo/todo-list/todo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoEditComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
