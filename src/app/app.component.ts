import { AfterViewInit, Component, ComponentRef, ContentChild, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import {ModalComponent} from './components/modal/modal.component';
import {ModalService} from './system/services/modal.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnChanges{
    @ViewChild('modal', {read: TemplateRef}) modal!: TemplateRef<unknown>;
    @ViewChild('viewport', {read: ViewContainerRef}) private readonly viewport!: ViewContainerRef;

    constructor(
        private modalService: ModalService
    ){}

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);

    }

    public closeModal(event: boolean) {
        if(event) {
            console.log(event);

            this.modalService.closeModal(this.viewport, this.modal)
        }
    }

}
