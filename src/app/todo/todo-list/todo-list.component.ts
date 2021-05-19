import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'todo-todo-list',
  templateUrl: 'todo-list.component.html',
})
export class TodoListComponent implements OnInit {
  tests = [ {id: '1', description: "Eat"}, {id: '2', description: "Jog"}  ] 

  newTodoForm: FormGroup = this.fb.group({
    description: this.fb.control(null, [ Validators.required, Validators.minLength(6) ])
  })
  constructor( private fb: FormBuilder, private crudService: CrudService) { }

  ngOnInit() {
    this.getTodos()
  }
  getTodos() {
    this.crudService.getTodos().subscribe(res => {
      this.tests = res
    })
  }
  showTodoValue() {
    this.newTodoForm.get("id").value
    this.newTodoForm.get("description").value
  }

  addTodo() {
    this.crudService.addTodo(this.newTodoForm.get("description").value).subscribe(res => {
      this.tests.push( {        
        id: res.id,
        description: this.newTodoForm.get("description").value
       } );
    })
    //this.newTodoForm.reset()
  } 

  deleteTodoItem(index, id) {
    this.crudService.deleteTodo(id).subscribe(res => {
      this.tests.splice(index, 1)
    })
  }

}
