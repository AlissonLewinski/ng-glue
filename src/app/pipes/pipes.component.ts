import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  asyncPromiseValue = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Async promise value'), 2000)
  })

  asyncObservableValue = new Observable<string>(observer => {
    setTimeout(() => observer.next('Async observable value'), 2000)
  })

  constructor() { }


  ngOnInit(): void {
  }

}
