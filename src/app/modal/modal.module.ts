import { NgModule } from "@angular/core";
import { ModalService } from "./modal.service";
import { ModalContainerComponent } from "./modal.container";
import { ModalComponent } from './modal.component';

@NgModule({
    declarations: [ModalContainerComponent,ModalComponent],
    exports: [ModalContainerComponent, ModalComponent],
    providers: [ModalService]
})
export class ModalModule {
}
