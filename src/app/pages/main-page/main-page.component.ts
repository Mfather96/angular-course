import { Component, OnInit } from '@angular/core';
import { delay, filter, fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit{
  public openPanel: boolean = false;
  
  private clicked$: Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'click');

  ngOnInit(): void {
    this.clicked$
    .pipe(
      delay(100)
    )
    .subscribe(() => {
      console.log(this.openPanel, 'click');
      
      this.openPanel = false;
    })  
  }
}
