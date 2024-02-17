import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyInsuranceDetailsComponent } from '../app/my-insurance-details/my-insurance-details.component'

const routes: Routes = [
  { path: 'my-insurance-details', component: MyInsuranceDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
