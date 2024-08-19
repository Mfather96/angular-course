import { AfterViewInit, ChangeDetectionStrategy, Component, ComponentRef, ContentChild, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import {ModalComponent} from './components/modal/modal.component';
import {ModalService} from './system/services/modal.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
    @ViewChild('modal', {read: TemplateRef}) modal!: TemplateRef<unknown>;
    @ViewChild('viewport', {read: ViewContainerRef}) private readonly viewport!: ViewContainerRef;

    constructor(
        private modalService: ModalService
    ){}

    ngOnInit(): void {
    }

    public closeModal(event: boolean) {
        if(event) {
            this.modalService.closeModal(this.viewport, this.modal)
        }
    }

}
