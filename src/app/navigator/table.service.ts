import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Table } from './table';


@Injectable()
export class TableService {
   constructor(private http: HttpClient) { }
   getData() {
      return this.http.get<Table[]>('./assets/tables.json')
   }
}
