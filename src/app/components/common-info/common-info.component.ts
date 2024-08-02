import { Component, OnInit } from '@angular/core';
import {DoubtService} from '../../system/services/doubt.service';
import {IBank, ITotalInfo} from '../../system/interfaces/interface';

@Component({
  selector: 'app-common-info',
  templateUrl: './common-info.component.html',
  styleUrl: './common-info.component.scss'
})
export class CommonInfoComponent implements OnInit{
    public totalInfo: ITotalInfo = {
        commonDoubtSum: 0,
        commonPayPerMonth: 0,
    };

    private allBanks: IBank[] | null = this.doubtService.getBanks();

    constructor(private doubtService: DoubtService) {}

    ngOnInit(): void {
        this.getAllTotalInfo();
    }

    private getAllTotalInfo() {
        if(this.totalPayPerMonth && this.totalSumDoubt) {
            this.totalInfo.commonDoubtSum = this.totalSumDoubt,
            this.totalInfo.commonPayPerMonth = this.totalPayPerMonth
        }
    }

    private get totalSumDoubt() {
        return this.allBanks?.reduce((acc: number, elem: IBank) => acc + elem.doubt.totalSum, 0)
    };

    private get totalPayPerMonth() {
        return this.allBanks?.reduce((acc: number, elem: IBank) => acc + elem.doubt.payPerMonth, 0)
    }
}
