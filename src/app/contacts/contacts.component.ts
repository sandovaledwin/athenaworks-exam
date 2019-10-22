import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../models/contact.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  @Input() contacts$: Observable<Contact[]>;
  @Output() change = new EventEmitter<Contact>();

}
