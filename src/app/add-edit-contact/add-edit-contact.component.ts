import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.css']
})
export class AddEditContactComponent implements OnInit {
  _contact: Contact;
  _isHit = false;
  constructor(private dialog: MatDialogRef<AddEditContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact) {
    this._contact = data;
  }

  ngOnInit(): void {
  }

  close() {
    this.dialog.close();
  }

  save(obj: Contact) {
    this._isHit = true;
    if (obj && obj.firstName && obj.firstName.trim().length > 0 && obj.lastName && obj.lastName.trim().length > 0 && obj.phone && obj.phone.trim().length >= 10) {
      this.dialog.close(obj);
    }
  }

}
