import {inject} from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';

@inject(DialogController)
export class ModalTwo {
  mock = {hasValidation: function () { return false; }};

  constructor (DialogController) {
    this.controller                               = DialogController;
    DialogController.settings.lock                 = false;
    DialogController.settings.centerHorizontalOnly = true;
  }
}
