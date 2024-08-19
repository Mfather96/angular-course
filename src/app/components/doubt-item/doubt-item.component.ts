import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IBank } from '../../system/interfaces/interface';

@Component({
  selector: 'app-doubt-item',
  templateUrl: './doubt-item.component.html',
  styleUrl: './doubt-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoubtItemComponent implements OnInit {
  @Input() bank: IBank | null = null;
  public isOpenDescription: boolean = false;

  constructor (
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
      this.cdr.markForCheck()
  }

  public toggleDescription(): void {
    this.isOpenDescription = !this.isOpenDescription
  }
}
