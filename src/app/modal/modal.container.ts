import {
    Component, OnInit, ViewChild,
    ViewContainerRef, ComponentFactoryResolver
} from "@angular/core";
import { ModalService } from "./modal.service";

@Component({
    selector: 'app-modal-container',
    template: `<div #modalcontainer></div>`
})
export class ModalContainerComponent implements OnInit {
    @ViewChild('modalcontainer', { static: true, read: ViewContainerRef })
    viewContainerRef: ViewContainerRef;

    constructor(
        private modalService: ModalService) {
    }

    ngOnInit() {
        this.modalService.RegisterContainerRef(this.viewContainerRef);
    }
}
