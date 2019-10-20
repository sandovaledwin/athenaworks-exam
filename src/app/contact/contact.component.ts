import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() data: Contact;

  constructor() { }

  ngOnInit() {
  }

}
