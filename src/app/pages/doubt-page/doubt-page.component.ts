import { Component, OnInit } from '@angular/core';
import { IBank } from '../../system/interfaces/interface';
import { DoubtService } from '../../system/services/doubt.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-doubt-page',
  templateUrl: './doubt-page.component.html',
  styleUrl: './doubt-page.component.scss'
})
export class DoubtPageComponent implements OnInit{
  private banks: IBank[] | null = null;
  public currentBank: IBank | null = null;
  constructor(
    private doubtService: DoubtService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.banks = this.doubtService.getBanks();
    this.currentBank = this.getCurrentBank();
  }

  private getCurrentBank(): IBank | null {
    let bankId = this.route.routerState.snapshot.url.slice(-1);

    if(this.banks) {
      return this.banks.find((bank: IBank) => bank.id.toString() === bankId) || null
    } else {
      return null
    }
  }
}
