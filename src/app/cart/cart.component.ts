import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { Cart } from './cart';
import Carts from '../../assets/cart-products.json';

@Component({
  selector: "app-cart",
  template: `
<div class="container-fluid text-center">
    <div class="row">
        <div class="col">
        <div *ngFor="let ar of arrM"> {{ar.name1}}</div>
        <button (click)="showV()">show last sold</button>
        <div *ngFor='let x of Items'> {{x.value}}</div>
            <h5>BehaviorSubject /HttpClient</h5>
            <h2 class="new_arr">new array :[id:{{id}} name3: {{name}}]</h2>
            <ul class="list-group" *ngFor="let x of exams$|async">
                <li class="list-group-item">
                          id: {{x.id}}.  {{x.name}}
                    <button (click)="show(x, id, name)" type="button" class="btn btn-outline-success btn-small">
                        add newArr
                    </button>
                </li>
            </ul>
        </div>
    </div>
</div>
`,
  styles: [`
.new_arr {
    color: coral
};
.list-group-item {
    height: auto;
    text-align: left;
};
.btn {
    float: right;
}
`],
})
export class CartComponent implements OnInit {
  @Input() arrM: any[] = [];
  Items: any = []
  @Output() ItemsChange = new EventEmitter();

  id: number = 0;
  name: string = '';
  private _exam: BehaviorSubject<Cart[]> = new BehaviorSubject(Carts);
  public exams$: Observable<Cart[]> = this._exam.asObservable();
  url = '../../assets/cart-products.json';

  constructor(private _http: HttpClient) { }
  box = this._http.get(this.url)
  getTestData() {
    this.box.pipe(tap((value) => value)).subscribe((value) => { console.log(`Emitted array: `, value) });
  }

  show(x: any, id: any, name: any) {
    this.id = x.id;
    this.name = x.name;
    var new_arr = this._exam.next(
      [{
        id: 1,
        img: 'new img',
        name: 'You get new array',
        price: 10000,
        details: 'string',
        quantity: 5
      }]
    );
  }
  showV(): void {
    this.Items = [{ value: 'Apple iPone 13' }, { value: 'Apple Iphone 11' }, { value: 'Nokia 6600' }];
    this.ItemsChange.emit(this.Items);
  }

  ngOnInit(): void {
    this.getTestData();

  }
}
