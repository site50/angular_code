import { Component } from "@angular/core";
import { Table } from './table';
import { Observable } from 'rxjs';
import { TableService } from './table.service';


@Component({
  selector: "app-table",
  template: `<div class="title">
  <h5>LAZY LOADING table.module.ts/ HttpClient</h5>
  <div>One list page</div>
  <div>Select table to see result:</div>
  </div>

  <button *ngFor="let b of tables$ | async" type="button" class="btn btn-primary" >
<span [routerLink]="['/navigator/', b.id]" [queryParams]="{'':b?.tab}"  routerLinkActive="app"
    ariaCurrentWhenActive="page"> 
    {{b?.tab}} № {{b?.id}}
</span>
  </button>
`,
  styleUrls: ['table.component.css'],
  providers: [TableService]
})
export class TableComponent {
  tables$: Observable<Table[]>;
  constructor(private tableService: TableService) {
    this.tables$ = this.tableService.getData();
  }
}