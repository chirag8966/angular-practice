import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { GridComponent } from './components/grid/grid.component';
import { HttpService } from './shared/services/http.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [HttpService],
})

export class AppComponent implements OnInit {
  title = 'angular-practice';
  private httpService = inject(HttpService)
  public todos$: Observable<todo[]> = this.httpService.getTodos('5');

  // method via subscription
  async ngOnInit(): Promise<void> {
    // this.httpService.getTodos().subscribe((data) => {
    //   this.todos.set(data as todo[])
    // })
  }
}

export interface todo {
  title: string,
  id: string
}
