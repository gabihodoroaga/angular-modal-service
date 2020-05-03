import { Component } from '@angular/core';
import { ModalBase } from '../modal/modal.base';


@Component({
    selector: 'app-confirmation-modal',
    template: `
    <app-modal>
        <h2 class="uk-modal-title">{{title}}</h2>
        <p>{{content}}</p>
        <div class="uk-text-right">
            <button class="uk-button uk-button-default" 
                    type="button" 
                    (click)="onCancelInternal()">Cancel</button>
            <button class="uk-button uk-button-primary" 
            type="button" 
            (click)="onOkInternal()">Yes</button>
        </div>
    </app-modal>`
})
export class ConfirmationModalComponent extends ModalBase {
    title: string;
    content: string;
    onCancel = () => { };
    onOk = () => { };

    onCancelInternal(): void {
        this.onCancel();
        this.closeModal();
    }

    onOkInternal(): void {
        this.onOk();
        this.closeModal();
    }
}