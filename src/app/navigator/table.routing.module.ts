import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TableComponent } from './table.component';
import { TableDetailComponent } from './table.detail.component';

const routes: Routes = [
    { path: "navigator", component: TableComponent },
    { path: "navigator/:id", component: TableDetailComponent },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TableRoutingModule { }
