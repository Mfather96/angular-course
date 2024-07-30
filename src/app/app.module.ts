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
import { DoubtItemComponent } from './components/doubt-item/doubt-item.component';
import { DoubtListComponent } from './components/doubt-list/doubt-list.component';

@NgModule({
    declarations: [
        AppComponent, 
        CreatePageComponent, 
        DoubtPageComponent, 
        MainPageComponent,
        RightPanelComponent,
        DoubtItemComponent,
        DoubtListComponent
    ],
    imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
