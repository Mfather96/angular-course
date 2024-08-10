import { Injectable } from '@angular/core';
import {IHistory, IHistoryPay} from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

    public history: IHistory = {

    };
    constructor() { }

    public addToHistory(pay: IHistoryPay): void {
        this.history[pay.bankId].push(pay);
        console.log(this.history);

    }
}
