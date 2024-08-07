import { Component, Input } from '@angular/core';
import {IBank} from '../../system/interfaces/interface';

@Component({
  selector: 'app-set-pay',
  templateUrl: './set-pay.component.html',
  styleUrl: './set-pay.component.scss'
})
export class SetPayComponent {
    @Input() bank: IBank | null = null;
    public isPayBackSelect: boolean = false;

}
