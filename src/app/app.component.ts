import { AfterViewInit, Component, ComponentRef, ContentChild, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import {ModalComponent} from './components/modal/modal.component';
import {ModalService} from './system/services/modal.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnChanges, AfterViewInit{
    @ViewChild('modal', {read: TemplateRef}) modal!: TemplateRef<unknown>;
    @ViewChild('viewport', {read: ViewContainerRef}) private readonly viewport!: ViewContainerRef;

    constructor(
        private modalService: ModalService
    ){}

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.modalService.openModal(this.viewport, this.modal)
            // this.viewport.createEmbeddedView(this.modal)
        }, 3000)

    }

    ngOnChanges(changes: SimpleChanges): void {
        // this.viewport.clear();
    }

    public closeModal(event: boolean) {
        if(event) {
            console.log(event);

            this.modalService.closeModal(this.viewport, this.modal)
        }
    }

}
