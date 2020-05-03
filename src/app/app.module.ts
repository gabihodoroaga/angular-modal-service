import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalModule } from './modal/modal.module';
import { ModalComponent } from './modal/modal.component';
import { BasicModalComponent } from './dialogs/basic.modal.component';
import { ConfirmationModalComponent } from './dialogs/confirmation.modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    BasicModalComponent,
    ConfirmationModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent, BasicModalComponent, ConfirmationModalComponent]
})
export class AppModule { }
