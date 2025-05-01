import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { todo } from '../../app.component';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // This service is used to make HTTP calls to the backend API
  private readonly http: HttpClient = inject(HttpClient)

  public getTodos(limit: string): Observable<any> {
    return this.http.get<todo[]>(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
  }

}
