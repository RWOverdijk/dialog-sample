import {inject} from 'aurelia-framework';
import {DialogService} from 'aurelia-dialog';
import {ModalOne} from './modalone';

@inject(DialogService)
export class Users {
  heading = 'Github Users';
  constructor(dialogService) {
    this.dialogService = dialogService;
  }

  openModal () {
    this.dialogService.open({viewModel: ModalOne}).then(response => {
      console.log('Got called.');
    });
  }
}
