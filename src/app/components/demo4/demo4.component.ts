import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/person.interface';
import { ApiService } from 'src/app/services/api.service';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.css'],
  // providers: [],
})
export class Demo4Component implements OnInit {
  people!: Person[];
  peopleFromApi!: Person[];
  constructor(
    private apiService: ApiService,
    private observableService: ObservableService
  ) {}

  ngOnInit(): void {
    this.people = this.apiService.getPeople();
    this.apiService.getApiPeople().subscribe(({ data }) => {
      this.peopleFromApi = data;
    });
    this.observableService.callAll();
  }
}
