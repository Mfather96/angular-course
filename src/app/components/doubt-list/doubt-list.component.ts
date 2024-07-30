import { Component, OnInit } from '@angular/core';
import { DoubtServiceService } from '../../system/services/doubt-service.service';
import { IBank } from '../../system/interfaces/interface';

@Component({
  selector: 'app-doubt-list',
  templateUrl: './doubt-list.component.html',
  styleUrl: './doubt-list.component.scss'
})
export class DoubtListComponent implements OnInit {
  public banks: IBank[] | null = null;

  constructor(
    private doubtService: DoubtServiceService,
  ) {}

  ngOnInit(): void {
    this.banks = this.doubtService.getBanks();
  }
}
