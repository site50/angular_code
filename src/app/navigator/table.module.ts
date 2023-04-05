import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableDetailComponent } from './table.detail.component';
import { TableRoutingModule } from './table.routing.module';

@NgModule({
    imports: [CommonModule, TableRoutingModule],
    declarations: [TableComponent, TableDetailComponent]
})
export class TableModule { }