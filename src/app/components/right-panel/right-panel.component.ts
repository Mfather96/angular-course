import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrl: './right-panel.component.scss'
})
export class RightPanelComponent implements OnInit{
  
  ngOnInit(): void {
    // this.isOpen = this.openPanel
  }
}
