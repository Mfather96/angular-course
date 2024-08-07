import { Component, Input } from '@angular/core';
import { IBank } from '../../system/interfaces/interface';

@Component({
  selector: 'app-pay-history',
  templateUrl: './pay-history.component.html',
  styleUrl: './pay-history.component.scss'
})
export class PayHistoryComponent {
  @Input() bank: IBank | null = null
  public history: string[] = []
}
