import {inject} from 'aurelia-framework';
import {DialogService} from 'aurelia-dialog';
import {ModalTwo} from './modaltwo';

@inject(DialogService)
export class Two {
  constructor(dialogService) {
    this.dialogService = dialogService;
  }

  openModal () {
    this.dialogService.open({viewModel: ModalTwo}).then(response => {
      console.log('Got called.');
    });
  }
}
