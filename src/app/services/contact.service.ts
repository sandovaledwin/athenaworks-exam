import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  page: number = 1;

  constructor(private http: HttpClient) { }

  getAll() {
    const contacts = 'https://randomuser.me/api/?results=10&seed=chess&page=' + this.page;
    this.page++;
    return this.http.get(contacts);
  }

}
