import { Injectable } from '@angular/core';
import {
  AsyncSubject,
  BehaviorSubject,
  Observable,
  Observer,
  ReplaySubject,
  Subject,
  of,
} from 'rxjs';

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
    console.log('---callBase---');
    this.simpleObservable.subscribe(this.baseObserver);
  }

  callSimple() {
    console.log('---callSimple---');
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
    console.log('---callNormalSubscriber---');
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

  //#region Subject
  callSubject() {
    console.log('---callSubject---');
    // Subject
    const subject = new Subject<number>();
    subject.next(1);
    subject.next(2);
    const observer_A = subject.subscribe((v) =>
      console.log(`observer_A: ${v}`)
    );
    const observer_B = subject.subscribe((v) =>
      console.log(`observer_B: ${v}`)
    );
    subject.next(3);
    observer_A.unsubscribe();
    subject.next(4);
    observer_B.unsubscribe();
    // ReplaySubject
    const replaySubject = new ReplaySubject<number>(2);
    replaySubject.next(1);
    const observer_replayA = replaySubject.subscribe((v) =>
      console.log(`observer_replayA: ${v}`)
    );
    replaySubject.next(2);
    const observer_replayB = replaySubject.subscribe((v) =>
      console.log(`observer_replayB: ${v}`)
    );
    replaySubject.next(3);
    observer_replayA.unsubscribe();
    replaySubject.next(4);
    observer_replayB.unsubscribe();
    // BehaviorSubject
    const behaviorSubject = new BehaviorSubject<number>(99999);
    const observer_behaviorA = behaviorSubject.subscribe((v) =>
      console.log(`observer_behaviorA: ${v}`)
    );
    behaviorSubject.next(1);
    behaviorSubject.next(2);
    const observer_behaviorB = behaviorSubject.subscribe((v) =>
      console.log(`observer_behaviorB: ${v}`)
    );
    behaviorSubject.next(3);
    observer_behaviorA.unsubscribe();
    behaviorSubject.next(4);
    observer_behaviorB.unsubscribe();
    // AsyncSubject
    const asyncSubject = new AsyncSubject<number>();
    const observer_asyncA = asyncSubject.subscribe((v) =>
      console.log(`observer_asyncA: ${v}`)
    );
    asyncSubject.next(1);
    asyncSubject.next(2);
    const observer_asyncB = asyncSubject.subscribe((v) =>
      console.log(`observer_asyncB: ${v}`)
    );
    asyncSubject.next(3);
    observer_asyncA.unsubscribe();
    asyncSubject.complete();
    asyncSubject.next(4);
    observer_asyncB.unsubscribe();
  }
  //#endregion

  callAll() {
    this.callBase();
    this.callSimple();
    this.callNormalSubscriber();
    this.callSubject();
  }
}
