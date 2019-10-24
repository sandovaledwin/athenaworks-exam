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
  @Output() showProfile = new EventEmitter<Contact>();
  @Output() showMore = new EventEmitter();

  groupSelected: string = 'All';
  groups: Array<string> = [
    'All',
    'Student', 
    'Professor', 
    'Administrative'
  ];

}
