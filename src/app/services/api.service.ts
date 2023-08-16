import { Injectable } from '@angular/core';
import { Person } from '../interfaces/person.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // 假設打 api 取得資料
  private people: Person[] = [
    { account: 'User1', password: '1111' },
    { account: 'User2', password: '2222' },
    { account: 'User3', password: '3333' },
  ];

  constructor() {}

  getPeople() {
    return this.people;
  }
}
