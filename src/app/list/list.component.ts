import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { Store } from '../store/store';

@Component({
  selector: 'list-app',
  template: `<div></div>
  
<div class="container-fluid text-center">
  <div class="row">
    <div class="col">
    <button (click)="showP()" type="button" class="btn btn-outline-success btn-small">
                        show new arraival
    </button>
    <div *ngFor='let x of mtems'>old:{{x.value}} </div>
   <app-cart [arrM]="arrM" ></app-cart>
      <h5>new Observable/subscribe/ List store:</h5>
      <ul class="list-group" *ngFor="let list of lists">
        <li class="list-group-item">{{ list.name }}</li>
      </ul>
    </div>
  </div>
</div>
`,
  styles: [`
.list-group-item {
    text-align: left;
}
`],
})
export class ListComponent implements OnInit {
  arrM: any[] = [];
  mtems: any = [];

  lists: Store[] = [];
  constructor(private listservice: ListService) { }
  showP() {
    this.arrM = [{ name1: "Samsung Galaxy A22" }, { name1: "Asus Zenfone 8" }]
  }

  ngOnInit() {
    const listsObservable = this.listservice.getList();
    listsObservable.subscribe((listsData: Store[]) => {
      this.lists = listsData;
    });
  }
}
