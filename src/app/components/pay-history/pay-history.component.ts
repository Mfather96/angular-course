import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IBank } from '../../system/interfaces/interface';
import {HistoryService} from '../../system/services/history.service';
import {IHistory, IHistoryPay} from './pay-history.interface';

@Component({
  selector: 'app-pay-history',
  templateUrl: './pay-history.component.html',
  styleUrl: './pay-history.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PayHistoryComponent implements OnInit{
    @Input() bank: IBank | null = null
    public history: IHistoryPay[] = [];

    constructor(
        private historyService: HistoryService
    ) {}

    ngOnInit(): void {
        if (this.bank) {
            this.history = this.historyService.history[this.bank.id]
        }

        console.log(this.history);

    }
}
