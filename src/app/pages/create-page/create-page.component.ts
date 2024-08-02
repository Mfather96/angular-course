import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IBank } from '../../system/interfaces/interface';
import { DoubtService } from '../../system/services/doubt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrl: './create-page.component.scss'
})
export class CreatePageComponent implements OnInit{

  @Output() creatingNewDoubt = new EventEmitter<IBank>()

  public form: FormGroup | null = null;

  constructor(
    private doubtService: DoubtService,
    private route: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      creditName: new FormControl('Кредит'),
      doubt: new FormGroup({
        totalSum: new FormControl(null, Validators.required),
        monthes: new FormControl(null, Validators.required),
        years: new FormControl(null, Validators.required),
        payPerMonth: new FormControl(null, Validators.required),
        interestRate: new FormControl(null, Validators.required),
      })
    })
  }

  submit(): void {
    if(this.form?.invalid) {
      return;
    }

    let doubtLength = this.doubtService.getBanksLength();
    const bankConfig = {
      ...this.form?.value,
      id: doubtLength + 1
    };
    this.doubtService.setBank(bankConfig);
    this.route.navigate(['/'])
  }
}
