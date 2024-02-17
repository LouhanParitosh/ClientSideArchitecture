import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyInsuranceDetailsComponent } from './my-insurance-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MyInsuranceDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([
      {
        path: '',
        component: MyInsuranceDetailsComponent
      }
    ])
  ]
})
export class MyInsuranceDetailsModule { }
