import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  @Input() data: Contact;

}
