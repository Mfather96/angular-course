import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DoubtService } from '../../system/services/doubt.service';
import { IBank } from '../../system/interfaces/interface';

@Component({
  selector: 'app-doubt-list',
  templateUrl: './doubt-list.component.html',
  styleUrl: './doubt-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoubtListComponent implements OnInit {
  public banks: IBank[] | null = null;

  constructor(
    private doubtService: DoubtService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.banks = this.doubtService.getBanks();
    this.cdr.markForCheck()
  }
}
