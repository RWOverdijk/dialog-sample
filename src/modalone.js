import {inject} from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';

@inject(DialogController)
export class ModalOne {
  constructor (DialogController) {
    this.controller                               = DialogController;
    DialogController.settings.lock                 = false;
    DialogController.settings.centerHorizontalOnly = true;
  }
}
