import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { DoubtPageComponent } from './pages/doubt-page/doubt-page.component';
import {DoubtListComponent} from './components/doubt-list/doubt-list.component';
import {DoubtListPageComponent} from './pages/doubt-list-page/doubt-list-page.component';
import {CommonInfoComponent} from './components/common-info/common-info.component';
import { SetPayComponent } from './components/set-pay/set-pay.component';
import { PayHistoryComponent } from './components/pay-history/pay-history.component';

const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'create', component: CreatePageComponent},
    {path: 'doubt/:id', component: DoubtPageComponent, children: [
        {path: 'set-pay', component: SetPayComponent},
        {path: 'history', component: PayHistoryComponent}
    ]},
    {path: 'doubts', component: DoubtListPageComponent, children: [
        {path: 'doubt-list', component: DoubtListComponent},
        {path: 'common-info', component: CommonInfoComponent},
    ]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
