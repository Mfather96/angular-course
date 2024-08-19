import { Injectable } from '@angular/core';
import {HistoryService} from './history.service';
import {DoubtService} from './doubt.service';
import {IBank, IFormValue} from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class SetPayService {

    constructor(
        private historyService: HistoryService,
        private doubtService: DoubtService
    ) { }

    public clearSum(form: IFormValue, bank: IBank) {
        let modifyBank: IBank = {
            ...bank,
            doubt: {
                totalSum: bank.doubt.totalSum - form.sum,
                monthes: bank.doubt.monthes - form.monthes,
                years: bank.doubt.years - form.years,
                payed: bank.doubt.payed + form.sum,
                interestRate: bank.doubt.interestRate,
                payPerMonth:  bank.doubt.payPerMonth,
            },
        };

        this.doubtService.setBank(modifyBank);
        this.historyService.addToHistory({
            bank: bank.name,
            bankId: bank.id,
            creditName: bank.creditName,
            sumPay: form.sum,
            sumBack: 0,
        })

    }

    public chargeSum(form: IFormValue, bank: IBank) {
        let modifyBank: IBank = {
            ...bank,
            doubt: {
                totalSum: bank.doubt.totalSum + form.sum,
                monthes: bank.doubt.monthes - form.monthes,
                years: bank.doubt.years - form.years,
                payed: bank.doubt.payed,
                interestRate: bank.doubt.interestRate,
                payPerMonth:  bank.doubt.payPerMonth,
            },
        };

        this.doubtService.setBank(modifyBank);
        this.historyService.addToHistory({
            bank: bank.name,
            bankId: bank.id,
            creditName: bank.creditName,
            sumPay: 0,
            sumBack: form.sum,
        })
    }
}
