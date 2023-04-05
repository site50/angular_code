import { Observable, map, startWith } from 'rxjs';
import { Component } from "@angular/core";
import { combineLatest, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Store, arr } from './store';

@Component({
  selector: "ex-app",
  templateUrl: "./store.component.html",
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent {
  new_array: any[] = [];
  quantity: number = 0;
  comment: string = 'Add comment on this page';
  new_comment: any = [];
  click: number = 1;
  id: number = 0;
  array_observable$: Observable<Store[]>;
  arrayObservable_filter$: Observable<Store[]>;
  filter: FormControl;
  filter$: Observable<string>;
  added_item = true;
  selectItem: Store;

  constructor() {
    this.array_observable$ = of(arr);
    this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.arrayObservable_filter$ = combineLatest(this.array_observable$, this.filter$).pipe(
      map(([array_observable, filterString]) => array_observable.filter(state => state.name.toLowerCase()
        .indexOf(filterString.toLowerCase()) !== -1, array_observable)));
  }

  addComment(input_comment: string, comment: string, selectItem: any) {
    if (input_comment != '') {
      this.comment = "add comment"
      this.new_comment.push({ selectItem, input_comment })
    }
    else {
      this.comment = "Need add comment !!!"
    }
  }

  add_quan(quantity: any, x: any, click: any) {
    x.quantity++;
    x.click++;
  }

  add(store: Store, click: any, id: any) {
    store.click++;
    console.log(store.click)

    this.new_array.push(store)
    var new_array = this.new_array.filter((item, index) => {
      return index === this.new_array.findIndex(i => item.id === i.id)
    });
    this.new_array = new_array;
  }

  remove(x: any, quantit: any, id: any, click: any) {
    if (x.quantity != 0 || x.quantity! <= -1) {
      x.quantity--;
      x.click--;
    }
    if (x.quantity === 0) {
      const index = this.new_array.findIndex((w: any) => { return w.id === id })
      if (index >= 0) {
        this.new_array.splice(index, 1)
        this.new_array = this.new_array;
        x.quantity = 1;
      }
    }
  }

  selectArray(x: Store): void {
    this.selectItem = x;
  }
}

