import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {DoubtService} from '../../system/services/doubt.service';
import {IBank, ITotalInfo} from '../../system/interfaces/interface';

@Component({
  selector: 'app-common-info',
  templateUrl: './common-info.component.html',
  styleUrl: './common-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonInfoComponent implements OnInit{
    public totalInfo: ITotalInfo = {
        commonDoubtSum: 0,
        commonPayPerMonth: 0,
        commonPayedAlready: 0,
    };
    public expandAdditional: boolean = false;

    public allBanks: IBank[] | null = this.doubtService.getBanks();

    constructor(private doubtService: DoubtService) {}

    ngOnInit(): void {
        this.getAllTotalInfo();
        console.log(this.allBanks);

    }

    private getAllTotalInfo() {
        if(this.totalPayPerMonth && this.totalSumDoubt && this.totalPayedAlready) {
            this.totalInfo.commonDoubtSum = this.totalSumDoubt,
            this.totalInfo.commonPayPerMonth = this.totalPayPerMonth
            this.totalInfo.commonPayedAlready = this.totalPayedAlready
        }
    }

    private get totalSumDoubt() {
        return this.allBanks?.reduce((acc: number, elem: IBank) => acc + elem.doubt.totalSum, 0)
    };

    private get totalPayPerMonth() {
        return this.allBanks?.reduce((acc: number, elem: IBank) => acc + elem.doubt.payPerMonth, 0)
    }

    private get totalPayedAlready() {
        return this.allBanks?.reduce((acc: number, elem: IBank) => acc + elem.doubt.payed, 0)
    }
}
