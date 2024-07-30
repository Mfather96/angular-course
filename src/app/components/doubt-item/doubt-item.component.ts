import { Component, Input } from '@angular/core';
import { IBank } from '../../system/interfaces/interface';

@Component({
  selector: 'app-doubt-item',
  templateUrl: './doubt-item.component.html',
  styleUrl: './doubt-item.component.scss'
})
export class DoubtItemComponent {
  @Input() bank: IBank | null = null;
  public isOpenDescription: boolean = false;

  public toggleDescription(): void {
    this.isOpenDescription = !this.isOpenDescription
  }
}
