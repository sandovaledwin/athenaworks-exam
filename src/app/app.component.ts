import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Contact } from './models/contact.model';
import * as ContactActions from './actions/contact.actions';
import { AppState } from './models/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  subscription: any;
  contacts$: Observable<Contact[]>;
  contact: Contact;

  constructor(private store: Store<AppState>) { 
    this.contacts$ = this.store.select('contact');
  }

  ngOnInit() {
    this.store.dispatch({ type: '[CONTACT] Load contacts' });
    //Getting the first record for listing as default
    this.subscription = this.contacts$.subscribe(
      (contacts) => {
        if (!this.contact) {
          this.contact = contacts[0];
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  showContact(contact: Contact) {
    this.contact = contact;
  }

  showMore() {
    this.store.dispatch({ type: '[CONTACT] Load contacts' });
  }

}
