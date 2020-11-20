import { Component } from '@angular/core';
import { ModalService } from './modal/modal.service';
import { BasicModalComponent } from './dialogs/basic.modal.component';
import { ConfirmationModalComponent } from './dialogs/confirmation.modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-modal-service';
  content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

  constructor(private modalService: ModalService) {
  }

  openBasicModal() {
    this.modalService.open(BasicModalComponent, { title: "Headline", content: this.content });
  }

  openConfiramtionModal() {
    this.modalService.open(ConfirmationModalComponent,
      {
        title: "Confirmation",
        content: "Are you sure you want to do this action?",
        onOk: () => {
          console.log('Ok clicked');
        },
        onCancel: () => {
          console.log('Cancel clicked.')
        }
      });
  }
}
