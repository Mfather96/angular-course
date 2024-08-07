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
}

export interface ITotalInfo {
    commonDoubtSum: number,
    commonPayPerMonth: number,
}

export interface IHistoryPay {
    bank: string,
    creditName: string,
    sumPay: number,
    sumBack: number,
    reason: string,
}
