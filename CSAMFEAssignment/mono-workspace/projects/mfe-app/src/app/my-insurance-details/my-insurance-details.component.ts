import { Component } from '@angular/core';

@Component({
  selector: 'app-my-insurance-details',
  templateUrl: './my-insurance-details.component.html',
  styleUrls: ['./my-insurance-details.component.scss']
})
export class MyInsuranceDetailsComponent {
  insuranceID = localStorage.getItem("insuranceID") ? JSON.parse(localStorage.getItem("insuranceID") || '{}') : 30;
}
