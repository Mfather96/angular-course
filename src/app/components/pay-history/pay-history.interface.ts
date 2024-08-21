export interface IHistoryPay {
    bank: string,
    bankId: number,
    creditName: string,
    sumPay: number,
    sumBack: number,
    date: Date,
    reason?: string,
}

export interface IHistory {
    [key: string]: IHistoryPay[];
}
