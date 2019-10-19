import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getAll() {
    const contacts = 'https://randomuser.me/api/?results=10&seed=chess';
    return this.http.get(contacts);
  }

}
