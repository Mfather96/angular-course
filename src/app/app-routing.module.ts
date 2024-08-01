import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { DoubtPageComponent } from './pages/doubt-page/doubt-page.component';
import {DoubtListComponent} from './components/doubt-list/doubt-list.component';
import {DoubtListPageComponent} from './pages/doubt-list-page/doubt-list-page.component';

const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'create', component: CreatePageComponent},
    {path: 'doubt/:id', component: DoubtPageComponent},
    {path: 'doubt-list', component: DoubtListPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
