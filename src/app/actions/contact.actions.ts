import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Contact } from '../models/contact.model'

export const ADD_CONTACT = '[CONTACT] Add one'
export const ADD_CONTACTS = '[CONTACT] Add many'

export class AddContact implements Action {
  readonly type = ADD_CONTACT
  constructor(public payload: Contact) {}
}

export class AddContacts implements Action {
  readonly type = ADD_CONTACTS
  constructor(public payload: Contact[]) {}
}

export type Actions = AddContact | AddContacts;
