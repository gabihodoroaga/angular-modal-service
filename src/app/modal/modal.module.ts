import { NgModule } from "@angular/core";
import { ModalService } from "./modal.service";
import { ModalContainerComponent } from "./modal.container";

@NgModule({
    declarations: [ModalContainerComponent],
    exports: [ModalContainerComponent],
    providers: [ModalService]
})
export class ModalModule {
}
