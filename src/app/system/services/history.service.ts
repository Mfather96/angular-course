import { Injectable } from '@angular/core';
import {IHistory, IHistoryPay} from '../../components/pay-history/pay-history.interface';
import {IBank} from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

    public history: IHistory = {

    };
    constructor() { }

    public addToHistory(pay: IHistoryPay): void {
        if (Array.isArray(this.history[pay.bankId.toString()])) {
            this.history[pay.bankId.toString()].push(pay);
            console.log(this.history);
            return
        } else {
            this.history[pay.bankId.toString()] = [];
            this.history[pay.bankId.toString()].push(pay);
            console.log(this.history);
        }
    }
}
