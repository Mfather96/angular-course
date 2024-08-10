export interface IBank {
    name: string,
    id: number,
    creditName: string,
    doubt: IDoubt,
}

export interface IDoubt {
    totalSum: number,
    monthes: number,
    years: number,
    payPerMonth: number,
    interestRate: number,
    payed: number,
}

export interface ITotalInfo {
    commonDoubtSum: number,
    commonPayPerMonth: number,
    commonPayedAlready: number,
}

export interface IHistoryPay {
    bank: string,
    bankId: string,
    creditName: string,
    sumPay: number,
    sumBack: number,
    reason?: string,
}

export interface IHistory {
    [key: string]: any[];
}

export interface IFormValue {
    sum: number,
    monthes: number,
    years: number,
    reason?: string,
}
