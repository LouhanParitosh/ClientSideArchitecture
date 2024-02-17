import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayPremiumComponent } from './pay-premium.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PayPremiumComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: PayPremiumComponent
      }
    ])
  ]
})
export class PayPremiumModule { }
