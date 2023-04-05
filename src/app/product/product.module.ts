import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { UserRoutingModule } from './product.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
imports: [CommonModule, UserRoutingModule,HttpClientModule, FormsModule
   ,ReactiveFormsModule 
],
declarations: [ProductComponent ]
})
export class ProductModule { }