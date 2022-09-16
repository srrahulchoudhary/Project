import { Component, OnInit, Inject } from '@angular/core';
import { ContactListService } from './contact-list.service';
import { Contact } from './contact.model';
import { AddEditContactComponent } from './add-edit-contact/add-edit-contact.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialodComponent } from './confirmation-dialod/confirmation-dialod.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // local variable delaration
  _contactListData: Contact[];
  _contact: Contact;

  // delare dependency at component lavel
  constructor(
    private contactListService: ContactListService,
    private dialog: MatDialog) {
    this._contactListData = [];
    this._contact = new Contact();
  }

  // initialize component and directories by ngOnInit method
  // this is importent life cycle hook step
  ngOnInit() {
    this.getContactList();
  }

  // call a method for calling API and get json data
  getContactList() {
    this.contactListService.getContactList().subscribe((result: Contact[]) => {
      this._contactListData = result;
    });
  }

  // When click on edit button in the row of table/grid
  // Open  new model popup for edit record
  editContact(rowData: Contact) {
    const dialogRef = this.dialog.open(AddEditContactComponent,
      {
        height: '350px',
        width: '450px',        
        disableClose: false,
        data: Object.assign({}, rowData)
      });
    dialogRef.afterClosed().subscribe((result: Contact) => {
      this.saveContact(result);
    });
  }

  // When click on delete button in row of table/grid
  deleteContact(rowData: Contact) {
    const dialogRef = this.dialog.open(ConfirmationDialodComponent,
      {
        height: '200px',
        width: '400px',        
        disableClose: false,
        data: new Contact()
      });
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (rowData.id && rowData.id > 0 && result) {
        const index = this._contactListData.findIndex(a => a.id == rowData.id);
        this._contactListData.splice(index, 1);
      }
    });


    
  }

  // Click on add new record button for add new row in the table Data
  addNewContact() {
    const dialogRef = this.dialog.open(AddEditContactComponent,
      {
        height: '350px',
        width: '450px',        
        disableClose: false,
        data: new Contact()
      });
    dialogRef.afterClosed().subscribe((result: Contact) => {
      this.saveContact(result);
    });
  }

  // Click on the save button and Add/Edit a single record in the local grid data
  saveContact(obj: Contact) {
    // if id is exist of row data then apply edit logic
    if (obj.id && obj.id > 0) {
      const index = this._contactListData.findIndex(a => a.id == obj.id);
      this._contactListData[index] = Object.assign({}, obj);
    }
    // if id is not exist means add new record in the local grid data
    else if (!obj.id || obj.id <= 0) {
      // find Max id number for remove duplicat max id.
      let maxId = 0;
      this._contactListData.forEach(element => {
        if (element.id && maxId < element.id) {
          maxId = element.id;
        }
      });
      // Push new object in array list/ table data
      this._contactListData.push({
        id: maxId + 1,
        firstName: obj.firstName,
        lastName: obj.lastName,
        phone: obj.phone
      })
    }
    this._contact = new Contact();
  }

  // reassigne new object for clear old data
  cancel() {
    this._contact = new Contact();
  }
}
