import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'todo-todo-edit',
  templateUrl: './todo-edit.component.html',
  styles: []
})

export class TodoEditComponent implements OnInit {
  editTodoForm: FormGroup = this.form.group({
    description: this.form.control(null,[ Validators.required ]),
    id: this.form.control(null, [ Validators. required ])
  })
  constructor(private activatedRoute: ActivatedRoute, private crudService: CrudService, private form: FormBuilder, private router: Router) { 
      
  }

  ngOnInit(): void { 
    this.crudService.getTodo(this.activatedRoute.snapshot.params.id).subscribe(data=>{
      this.editTodoForm.setValue({description: data.description, id: data.id})   
    }) 
  }
  
  editTodo() {
    this.crudService.editTodo(this.editTodoForm.value.id, this.editTodoForm.value).subscribe(() =>{
      this.router.navigate( ['/'])
    })
  }
}
