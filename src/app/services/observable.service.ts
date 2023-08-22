import { Injectable } from '@angular/core';
import { Observable, Observer, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObservableService {
  constructor() {}

  //#region Simple Observable
  private simpleObservable = of(1, 2, 3);
  private baseObserver = {
    next: (x: number) => console.log('Observer got a next value: ' + x),
    error: (err: Error) => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };

  callBase() {
    console.log('callBase');
    this.simpleObservable.subscribe(this.baseObserver);
  }

  callSimple() {
    console.log('callSimple');
    this.simpleObservable.subscribe(
      (x) => console.log('Observer got a next value: ' + x),
      (err) => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    );
  }
  //#endregion

  //#region Normal Observable
  private normalSubscriber = (observer: Observer<number>) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
    return { unsubscribe() {} };
  };
  private normalObservable = new Observable(this.normalSubscriber);

  callNormalSubscriber() {
    console.log('callNormalSubscriber');
    this.normalObservable.subscribe({
      next(num) {
        console.log(num);
      },
      complete() {
        console.log('Finished!');
      },
    });
  }
  //#endregion

  callAll() {
    this.callBase();
    this.callSimple();
    this.callNormalSubscriber();
  }
}
