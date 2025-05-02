import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpCallComponent } from './components/http-call/http-call.component';
import { HttpService } from './shared/services/http.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { DuplicateNumberComponent } from './components/duplicate-number/duplicate-number.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
