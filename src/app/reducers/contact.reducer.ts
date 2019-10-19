import { Action } from '@ngrx/store'
import { Contact } from '../models/contact.model'
import * as ContactActions from '../actions/contact.actions'

const initialState: Contact[] = [];

export function reducer(state: Contact[] = [...initialState], action: ContactActions.Actions) {
  switch(action.type) {
      case ContactActions.ADD_CONTACT:
          return [...state, action.payload];
      case ContactActions.ADD_CONTACTS:
          return [...state, ...action.payload];
      default:
          return state;
  }
}
