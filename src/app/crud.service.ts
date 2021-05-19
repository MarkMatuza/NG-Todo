import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor(private httpclient: HttpClient) { }
  baseUrl = 'http://localhost:3000'
  addTodo(description: string): Observable<any> {    
    return this.httpclient.post(this.baseUrl + '/todos', {description:description})
  }
  getTodos(): Observable<any> {
    return this.httpclient.get(this.baseUrl + '/todos')
  }
  deleteTodo(id: number) {
    return this.httpclient.delete(this.baseUrl + '/todos/' + id)
  }
  getTodo(id): Observable<any> {
    return this.httpclient.get(this.baseUrl + '/todos/'+ id)
  }
  editTodo(id, body): Observable<any> {
    return this.httpclient.put(this.baseUrl + '/todos/' + id, body)
  }
}
