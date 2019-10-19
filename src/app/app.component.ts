import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Contact } from './models/contact.model';
import * as ContactActions from './actions/contact.actions';
import { AppState } from './models/app.state';
import { Observable } from 'rxjs';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contacts: Observable<Contact[]>;

  constructor(private store: Store<AppState>, private contactService: ContactService) { 
    this.contacts = store.select('contact');
  }  

  ngOnInit() {
    console.log('Reading from state manger:');
    console.log('Contacts:');
    this.contacts.subscribe((contact) => console.log(contact));
    /**
    const contact: Contact = { 
      id: 'test2',
      firstName: 'test2',
      lastName: 'test2',
      email: 'test',
      phone: 'test',
      bio: 'test',
      career: 'test', 
      group: [] 
    }
    this.store.dispatch(new ContactActions.AddContact(contact));
    this.contactService.getAll().subscribe((contact) => console.log(contact));
    **/
    this.store.dispatch({ type: '[CONTACT] Load contacts' });
  }
}
