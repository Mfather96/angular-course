import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  public openModal(viewport: any, modal: any) {
    viewport.createEmbeddedView(modal)
  }
  public closeModal(viewport: any, modal: any) {
    viewport.clear(modal)
  }
}
