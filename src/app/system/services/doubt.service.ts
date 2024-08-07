import { Injectable } from '@angular/core';
import { IBank, IDoubt } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class DoubtService {

  private banks: IBank[] = [
    {
      name: 'ВТБ',
      creditName: 'Ипотека',
      id: 1,
      doubt: {
        monthes: 360,
        payPerMonth: 42000,
        totalSum: 2570000,
        years: 30,
        interestRate: 19.7,
        payed: 0,
      }
    },
    {
      name: 'Sber',
      creditName: 'Потребительский кредит',
      id: 2,
      doubt: {
        monthes: 60,
        payPerMonth: 13000,
        totalSum: 440000,
        years: 5,
        interestRate: 25,
        payed: 0,
      }
    },
    {
      name: 'Тинькофф',
      id: 3,
      creditName: 'Кредитка Даши',
      doubt: {
        monthes: 0,
        payPerMonth: 3500,
        totalSum: 90000,
        years: 0,
        interestRate: 30,
        payed: 0,
      }
    },
    {
      name: 'Тинькофф',
      id: 4,
      creditName: 'Кредитка Вовы',
      doubt: {
        monthes: 0,
        payPerMonth: 5500,
        totalSum: 150000,
        years: 0,
        interestRate: 30,
        payed: 0,
      }
    },
    {
      name: 'SoftGamings',
      id: 5,
      creditName: 'Заём для риелтора',
      doubt: {
        monthes: 12,
        payPerMonth: 5000,
        totalSum: 60000,
        years: 0,
        interestRate: 0,
        payed: 5000,
      }
    },
    {
      name: 'Макс Молчанов',
      id: 6,
      creditName: 'Рассрочка за ноут',
      doubt: {
        monthes: 10,
        payPerMonth: 6000,
        totalSum: 58000,
        years: 0,
        interestRate: 30,
        payed: 12000,
      }
    },
  ];

  constructor() { }

  public getBanks(): IBank[] | null {
    return this.banks
  }

  public setBank(bankConfig: IBank): void {
    this.banks?.push(bankConfig)
  }

  public getDoubt(idBank: number): IDoubt | undefined {
    if (!this.banks?.length) {
      return undefined
    }

    for(let i = 0; i < this.banks.length; i++) {

      if (this.banks[i].id === idBank && this.banks[i].doubt !== undefined) {
        return this.banks[i].doubt
      } else {
        return undefined
      }
    }
  }

  public setDoubt(doubtConfig: IDoubt, idBank: number ): void {
    if (!this.banks?.length) {
      return;
    }

    for(let i = 0; i < this.banks.length; i++) {

      if (this.banks[i].id === idBank) {
        this.banks[i].doubt = doubtConfig
      }
    }
  }

  public getBanksLength(): number {
    return this.banks.length
  }
}
