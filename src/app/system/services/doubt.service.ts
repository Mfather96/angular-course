import { Injectable } from '@angular/core';
import { IBank, IDoubt } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class DoubtService {

  private banks: IBank[] = [
    {
      name: 'Tinkoff',
      creditName: 'кредитка',
      id: 1,
      doubt: {
        monthes: 360,
        payPerMonth: 42000,
        totalSum: 2570000,
        years: 30,
        interestRate: 19.7,
      }
    },
    {
      name: 'Sber',
      creditName: 'Потребительский кредит',
      id: 2,
      doubt: {
        monthes: 360,
        payPerMonth: 42000,
        totalSum: 2570000,
        years: 30,
        interestRate: 19.7,
      }
    },
    {
      name: 'VTB',
      id: 3,
      creditName: 'Ипотека',
      doubt: {
        monthes: 360,
        payPerMonth: 42000,
        totalSum: 2570000,
        years: 30,
        interestRate: 19.7,
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
