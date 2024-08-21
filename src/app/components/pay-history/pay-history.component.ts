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
    // public history: IHistoryPay[] = [
    //     {
    //         bank: 'ВТБ',
    //         bankId: 1,
    //         creditName: 'Ипотека',
    //         sumBack: 0,
    //         sumPay: 12000,
    //         reason: 'Внес досрочное погашение',
    //         date: new Date(),
    //     },
    //     {
    //         bank: 'ВТБ',
    //         bankId: 1,
    //         creditName: 'Ипотека',
    //         sumBack: 5000,
    //         sumPay: 0,
    //         reason: 'Списали дополнительные проценты',
    //         date: new Date(),
    //     },
    //     {
    //         bank: 'ВТБ',
    //         bankId: 1,
    //         creditName: 'Ипотека',
    //         sumBack: 0,
    //         sumPay: 43000,
    //         reason: 'Внес основной долг',
    //         date: new Date(),
    //     },
    //     {
    //         bank: 'ВТБ',
    //         bankId: 1,
    //         creditName: 'Ипотека',
    //         sumBack: 0,
    //         sumPay: 330,
    //         reason: 'Положил на досрочное',
    //         date: new Date(),
    //     },
    //     {
    //         bank: 'ВТБ',
    //         bankId: 1,
    //         creditName: 'Ипотека',
    //         sumBack: 0,
    //         sumPay: 12000,
    //         reason: 'Внес досрочное погашение',
    //         date: new Date(),
    //     },
    //     {
    //         bank: 'ВТБ',
    //         bankId: 1,
    //         creditName: 'Ипотека',
    //         sumBack: 5000,
    //         sumPay: 0,
    //         reason: 'Списали дополнительные проценты',
    //         date: new Date(),
    //     },
    //     {
    //         bank: 'ВТБ',
    //         bankId: 1,
    //         creditName: 'Ипотека',
    //         sumBack: 0,
    //         sumPay: 43000,
    //         reason: 'Внес основной долг',
    //         date: new Date(),
    //     },
    //     {
    //         bank: 'ВТБ',
    //         bankId: 1,
    //         creditName: 'Ипотека',
    //         sumBack: 0,
    //         sumPay: 330,
    //         reason: 'Положил на досрочное',
    //         date: new Date(),
    //     },
    //     {
    //         bank: 'ВТБ',
    //         bankId: 1,
    //         creditName: 'Ипотека',
    //         sumBack: 0,
    //         sumPay: 12000,
    //         reason: 'Внес досрочное погашение',
    //         date: new Date(),
    //     },
    //     {
    //         bank: 'ВТБ',
    //         bankId: 1,
    //         creditName: 'Ипотека',
    //         sumBack: 5000,
    //         sumPay: 0,
    //         reason: 'Списали дополнительные проценты',
    //         date: new Date(),
    //     },
    //     {
    //         bank: 'ВТБ',
    //         bankId: 1,
    //         creditName: 'Ипотека',
    //         sumBack: 0,
    //         sumPay: 43000,
    //         reason: 'Внес основной долг',
    //         date: new Date(),
    //     },
    //     {
    //         bank: 'ВТБ',
    //         bankId: 1,
    //         creditName: 'Ипотека',
    //         sumBack: 0,
    //         sumPay: 330,
    //         reason: 'Положил на досрочное',
    //         date: new Date(),
    //     },
    // ];

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
