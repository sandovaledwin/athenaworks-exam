import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Contact } from '../models/contact.model';
import { ContactService } from '../services/contact.service';

@Injectable()
export class ContactEffects {

  careers = [    
    'Accounting',
    'Architecture',    
    'Biology',
    'Business Administration',
    'Computer Science', 
    'Mathematics'    
  ];

  groups = [
    'Student', 
    'Professor', 
    'Administrative'
  ];  

  constructor(
    private actions$: Actions,
    private contactService: ContactService
  ) { }

  loadContacts$ = createEffect(() => this.actions$.pipe(
    ofType('[CONTACT] Load contacts'),
    mergeMap(() => this.contactService.getAll()
      .pipe(
        map((contacts: any) => {
          const contactList: Contact[] = [];
          contacts.results.forEach((contact) => {            
            const careerSelected = this.careers[Math.floor(Math.random() * 6)];
            const groupSelected = this.groups[Math.floor(Math.random() * 3)];            
            contactList.push({
              id: contact.login.uuid,
              firstName: contact.name.first,
              lastName: contact.name.last,
              email: contact.email,
              picture: contact.picture.large,
              phone: contact.phone,
              bio: 'Lorem Ipsum is simply dummy text ',
              career: careerSelected,
              group: groupSelected
            });
          });
          return ({ type: '[CONTACT] Add many', payload: contactList })

        }),
        catchError(() => EMPTY)
      ))
  )
  );

}
