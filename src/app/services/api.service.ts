import { Injectable } from '@angular/core';
import { Person } from '../interfaces/person.interface';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  getPeople() {
    return this.people;
  }

  getApiPeople() {
    return this.http.get<{ data: Person[] }>('/api/data.json');
  }

  postApiPeople() {
    return this.http.post<Person[]>('/api/data.json', this.people);
  }
}
