import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DoubtListPageComponent} from './doubt-list-page.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    DoubtListPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [DoubtListPageComponent]
})
export class DoubtListPageModule { }
