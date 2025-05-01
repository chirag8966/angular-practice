import { Component, inject, OnInit } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';

@Component({
  selector: 'app-http-call',
  imports: [],
  templateUrl: './http-call.component.html',
  styleUrl: './http-call.component.scss'
})
export class HttpCallComponent implements OnInit {
  private httpService = inject(HttpService)

  ngOnInit(): void {
    this.httpService.getTodos('10').subscribe(data => {
      console.log(data);
    })
  }
}
