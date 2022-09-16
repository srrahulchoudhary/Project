import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact.model';
// import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  constructor( private http: HttpClient) { }
url = 'https://my-json-server.typicode.com/voramahavir/contacts-mock-response/contacts';

  getContactList(){
    return this.http.get<Contact[]>(this.url);
  }
}
