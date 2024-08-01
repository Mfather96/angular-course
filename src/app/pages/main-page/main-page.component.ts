import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { delay, filter, fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit{
    @Output() openingModal = new EventEmitter<boolean>()
  public openPanel: boolean = false;

  private clicked$: Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'click');

  ngOnInit(): void {
    this.clicked$
    .pipe(
      delay(100)
    )
    .subscribe(() => {
      this.openPanel = false;
    })
  }

  openModal(){
    this.openingModal.emit(true)
  }
}
