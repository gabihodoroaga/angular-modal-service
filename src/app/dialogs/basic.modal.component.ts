import { Component } from '@angular/core';
import { ModalBase } from '../modal/modal.base';

@Component({
    selector: 'app-basic-modal',
    template: `
    <app-modal>
        <h2 class="uk-modal-title">{{title}}</h2>
        <p>{{content}}</p>
        <div class="uk-text-right">
            <button class="uk-button uk-button-default" 
                    type="button" 
                    (click)="onClose()">Close</button>
        </div>
    </app-modal>`
})
export class BasicModalComponent extends ModalBase {
    title: string;
    content: string;

    onClose(): void {
        this.closeModal();
    }
}