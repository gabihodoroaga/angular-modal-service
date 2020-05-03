import { Component } from '@angular/core';
import { trigger, animate, transition, style, 
    query, animateChild, group } from "@angular/animations";

@Component({
    host: {
        '[@modal]': 'true'
    },
    selector: 'app-modal',
    template: `
    <div class="uk-modal uk-open" style ="display: block">        
        <div class="uk-modal-dialog uk-modal-body" @modalDialog>
        <ng-content></ng-content>
        </div>
    </div>`,
    animations: [
        trigger('modal', [
            transition('void => *', [
                style({ opacity: 0 }),
                group([
                    query('@modalDialog', animateChild()),
                    animate(150, style({ opacity: 1 })),
                ])
            ]),
            transition('* => void', [
                group([
                    query('@modalDialog', animateChild()),
                    animate(150, style({ opacity: 0 }))
                ])
            ])
        ]),
        trigger('modalDialog', [
            transition('void => *', [
                style({ opacity: 0, transform: 'translateY(-100px)' }),
                animate(300)
            ]),
            transition('* => void', [
                animate(300, style({ 
                    opacity: 0, 
                    transform: 'translateY(-100px)'
                }))
            ])
        ])
    ]
})
export class ModalComponent {
}
