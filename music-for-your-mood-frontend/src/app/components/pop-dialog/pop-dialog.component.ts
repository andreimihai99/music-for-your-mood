import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-dialog',
  templateUrl: './pop-dialog.component.html',
  styleUrls: ['./pop-dialog.component.scss']
})
export class PopDialogComponent implements OnInit {

  modalTitle: string;
  modalMessage: string;
  //modalType:ModalType = ModalType.INFO;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalTitle = data.title;
    this.modalMessage = data.message;
    //this.modalType = data.type;
    
    console.log(data)
  }

  ngOnInit(): void {
  }

}

// export enum ModalType {
//   INFO = 'info',
//   WARN = 'warn'
// }
