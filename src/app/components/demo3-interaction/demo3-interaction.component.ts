import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3-interaction',
  templateUrl: './demo3-interaction.component.html',
  styleUrls: ['./demo3-interaction.component.css'],
})
export class Demo3InteractionComponent implements OnInit {
  @Input()
  get note(): string {
    return this._note;
  }
  set note(note: string) {
    this._note = (note && note.trim()) || '<no note set>';
  }
  private _note!: string;

  constructor() {}

  ngOnInit(): void {}
}
