import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from 'src/app/Task';

const httpOpetions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
  deleteTask(task: Task): Observable<Task[]> {
    return this.http.delete<Task[]>(`${this.apiUrl}/${task.id}`);
  }
  updateTaskReminder(task: Task): Observable<Task[]> {
    return this.http.put<Task[]>(
      `${this.apiUrl}/${task.id}`,
      task,
      httpOpetions
    );
  }
}
