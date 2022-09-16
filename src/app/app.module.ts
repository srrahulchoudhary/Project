import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ContactListService } from './contact-list.service';
import { HttpClientModule } from '@angular/common/http';
import { AddEditContactComponent } from './add-edit-contact/add-edit-contact.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { ConfirmationDialodComponent } from './confirmation-dialod/confirmation-dialod.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEditContactComponent,
    ConfirmationDialodComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,    
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [
    ContactListService,
    // {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddEditContactComponent]
})
export class AppModule { }
