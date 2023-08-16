import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/person.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.css'],
  // providers: [],
})
export class Demo4Component implements OnInit {
  people!: Person[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.people = this.apiService.getPeople();
  }
}
