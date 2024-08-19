import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {IBank} from '../../system/interfaces/interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SetPayService} from '../../system/services/set-pay.service';
import {DoubtService} from '../../system/services/doubt.service';
import {AbstractComponent} from '../abstract/abstract.component';

@Component({
  selector: 'app-set-pay',
  templateUrl: './set-pay.component.html',
  styleUrl: './set-pay.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetPayComponent extends AbstractComponent implements OnInit{
    @Input() bank: IBank | null = null;
    @Output() sendingPay = new EventEmitter<boolean>();

    public isOpenForm: boolean = false;
    public isChargeDoubt: boolean = false;
    public form: FormGroup | null = null;

    constructor(
        private setPayService: SetPayService,
        private doubtService: DoubtService,
        private cdr: ChangeDetectorRef
    ) {
        super();
    }

    ngOnInit(): void {
        this.form = new FormGroup({
            sum: new FormControl(null, [Validators.required]),
            monthes: new FormControl(0, [Validators.required]),
            years: new FormControl(0, [Validators.required]),
            reason: new FormControl(''),
        })
    }

    submit() {
        if (this.isChargeDoubt && this.bank) {
            this.setPayService.chargeSum(this.form?.value, this.bank);
        }

        if (!this.isChargeDoubt && this.bank) {
            this.setPayService.clearSum(this.form?.value, this.bank);
        }

        this.sendingPay.emit(false);
        this.cdr.markForCheck();
        this.form?.reset();
    }
}
