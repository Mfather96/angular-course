import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { DoubtItemComponent } from '../../components/doubt-item/doubt-item.component';



@NgModule({
  declarations: [
    DoubtItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [DoubtItemComponent]
})
export class DoubtPageModule { }
