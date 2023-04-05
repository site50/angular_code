import { Component, OnInit } from "@angular/core";
import { Table } from './table';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import Tables from '../../assets/tables.json';
import { TableService } from './table.service';

@Component({
  selector: "detail-box",
  templateUrl: "./table.detail.component.html",
  styleUrls: ['table.component.css'],
  providers: [TableService]
})
export class TableDetailComponent implements OnInit {
  sType: string;
  tables: Table[] = Tables;
  tables$: Observable<Table[]>
  tables1: Table = this.tables[0];
  constructor(private route: ActivatedRoute,
    private tableService: TableService,
  ) {
    this.tables$ = this.tableService.getData();
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tables.forEach((p: Table) => {
        if (p.id == params['id']) {
          this.tables1 = p;
        }
      });
    });
  }
  onSelectedType(type: string) {
    this.sType = type;
    return this.sType;
  }
}