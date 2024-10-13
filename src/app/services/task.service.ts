import { Injectable } from '@angular/core';
import { Task } from '../Task'; // Make sure the Task interface is correctly defined
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions ={
  headers:new HttpHeaders({
    'content-type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // API URL
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  // Get tasks
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
  // delete task
  deleteTask(task:Task):Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);


  }
  //Update  reminder
  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    // This updates the task on the server
    return this.http.put<Task>(url, task,httpOptions);
  }

  //addTask
  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl,task,httpOptions);


  }
}
