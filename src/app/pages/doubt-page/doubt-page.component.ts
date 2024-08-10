import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IBank } from '../../system/interfaces/interface';
import { DoubtService } from '../../system/services/doubt.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-doubt-page',
  templateUrl: './doubt-page.component.html',
  styleUrl: './doubt-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoubtPageComponent implements OnInit, DoCheck{
    public currentBank: IBank | null = null;
    public payHistory: boolean | null = null;
    private banks: IBank[] | null = null;

    constructor(
        private doubtService: DoubtService,
        private route: Router,
        private cdr: ChangeDetectorRef,
    ) {}

    ngOnInit(): void {
        this.banks = this.doubtService.getBanks();
        this.currentBank = this.getCurrentBank();
    }

    ngDoCheck(): void {
        this.currentBank = this.getCurrentBank();
        this.cdr.markForCheck()
    }

    private getCurrentBank(): IBank | null {
        let bankId = this.route.routerState.snapshot.url.slice(-1);

        if(this.banks) {
            return this.banks.find((bank: IBank) => bank.id.toString() === bankId) || null
        } else {
            return null
        }
    }

    public sendPay(event: boolean) {
        this.payHistory = event;
        this.cdr.markForCheck()
    }
}
