import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { DoubtPageComponent } from './pages/doubt-page/doubt-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RightPanelComponent } from './components/right-panel/right-panel.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DoubtListComponent } from './components/doubt-list/doubt-list.component';
import { DoubtPageModule } from './pages/doubt-page/doubt-page.module';
import { ModalComponent } from './components/modal/modal.component';
import {DoubtListPageModule} from './pages/doubt-list-page/doubt-list-page.module';
import { CommonInfoComponent } from './components/common-info/common-info.component';
import { PayHistoryComponent } from './components/pay-history/pay-history.component';
import { SetPayComponent } from './components/set-pay/set-pay.component';
import { AbstractComponent } from './components/abstract/abstract.component';

@NgModule({
    declarations: [
        AppComponent,
        CreatePageComponent,
        DoubtPageComponent,
        MainPageComponent,
        RightPanelComponent,
        DoubtListComponent,
        ModalComponent,
        CommonInfoComponent,
        PayHistoryComponent,
        SetPayComponent,
        AbstractComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        DoubtListPageModule,
        DoubtPageModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
