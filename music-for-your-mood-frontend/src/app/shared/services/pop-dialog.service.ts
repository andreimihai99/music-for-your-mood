import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopDialogComponent } from 'src/app/components/pop-dialog/pop-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class PopDialogService {

  constructor(public dialog: MatDialog) { }

  openModal(title:string, message:string, yes:Function, no:Function) {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
        title: title,
        message:message
    };
    dialogConfig.minWidth = 350;

    const dialogRef = this.dialog.open(PopDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        if(yes){
          yes();
        }
      }else{
        if(no){
          no();
        }
      }
        
    });
  }
}
