import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreComponent } from './store/store.component';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';
//import { ParentComponent } from './box/parent.component';
//import { ChildComponent } from './box/child.component';

const routes: Routes = [

        { path: '', redirectTo: '/', pathMatch: 'full' },
        {
                path: '',
                loadChildren: () => import('./navigator/table.module').then(m => m.TableModule)
        },
        {
                path: '',
                loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
        },
        {
                path: 'store',
                component: StoreComponent
        },
        {
                path: 'list',
                component: ListComponent
        },
        {
                path: 'cart',
                component: CartComponent
        },
        {
                path: '',
                redirectTo: '',
                pathMatch: 'full'
        },

]
@NgModule({
        imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
        exports: [RouterModule]
})
export class AppRoutingModule { }
