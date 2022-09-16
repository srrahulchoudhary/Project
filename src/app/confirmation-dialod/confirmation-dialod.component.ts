import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-confirmation-dialod',
  templateUrl: './confirmation-dialod.component.html',
  styleUrls: ['./confirmation-dialod.component.css']
})
export class ConfirmationDialodComponent implements OnInit {

  constructor(private dialog: MatDialogRef<ConfirmationDialodComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact) {
  }

  ngOnInit(): void {
  }

  close(result: boolean) {
    this.dialog.close(result);
  }

}
