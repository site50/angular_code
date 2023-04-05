import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ['./product.component.scss'],
  providers: [ProductService]
})
export class ProductComponent {
  newP: any[] = [];
  newC: any = [];
  products: any = [];
  quantity: number = 0;
  comment: string = 'Add comment on this page';
  comment1: string = ''
  nameP1: string = '';
  arr: any = []
  public products$: Observable<Product[]>;
  constructor(
    private httpClient: HttpClient,
    private productService: ProductService) {
    this.products$ = this.productService.getData();
  }
  show_arr() {
    this.products$.subscribe((res) => { this.arr = res })
  }

  add_newArr(name: any, id: any, quantity: any) {

    this.newP.push({ id, name, quantity });

    var newP = this.newP.filter((item, index) => {
      return index === this.newP.findIndex(i => item.id === i.id);
    });
    this.newP = newP;

  }
  remove(x: any, quantit: any, id: any) {
    if (x.quantity != 0) {
      x.quantity--;
    }
    if (x.quantity === 0) {
      const index = this.newP.findIndex((w: any) => { return w.id === id })
      if (index >= 0) {
        this.newP.splice(index, 1)
        this.newP = this.newP;
      }
    }
  }
  add_quantity(quantit: any, x: any,) {

    x.quantity++;
    if (x.quantity === 1) {
      x.quantity++;
    }
    if (x.quantity === 0) {
      x.quantity == 1;
    }
  }

  addComment(c: string, comment: string, comment1: string, selectedHero: any) {

    if (c != '') {
      this.comment = "add comment"
      this.newC.push({ selectedHero, c })
    }
    else {
      this.comment = "Need add comment !!!"
    }
  }

  selectedHero: Product;

  onSelect(x: Product): void {
    this.selectedHero = x;
  }

  ngOnInit(): void {

    this.show_arr();
  }
}



