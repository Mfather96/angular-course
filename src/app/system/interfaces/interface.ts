export interface IBank {
    name: string,
    id: number,
    creditName?: string,
    doubt?: IDoubt,
}

export interface IDoubt {
    totalSum: number,
    monthes: number,
    years: number,
    payPerMonth: number,
    interestRate?: number,
}