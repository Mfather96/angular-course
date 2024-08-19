import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrl: './right-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RightPanelComponent implements OnInit{

    @Output() closingPanel = new EventEmitter<boolean>();
  ngOnInit(): void {
  }

  closePanel(): void {
    this.closingPanel.emit(false)
  }

}
