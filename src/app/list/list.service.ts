import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, arr } from '../store/store';

@Injectable({ providedIn: 'root' })

export class ListService {

  lists: Store[] = arr;

  constructor() { }
  public getList(): any {
    const listsObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.lists);
      }, 1000);
    });

    return listsObservable;
  }
}
