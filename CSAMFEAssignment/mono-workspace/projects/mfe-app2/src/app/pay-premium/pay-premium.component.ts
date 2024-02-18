import { Component } from '@angular/core';

@Component({
  selector: 'app-pay-premium',
  templateUrl: './pay-premium.component.html',
  styleUrls: ['./pay-premium.component.scss']
})
export class PayPremiumComponent {
  insuranceID = localStorage.getItem("insuranceID") ? JSON.parse(localStorage.getItem("insuranceID") || '{}') : 30;
    ; // Example age
  premium: number = 0;
  premiumWorker: Worker;
  insuranceType = 'Life'
  age = 30;

  constructor() {

    const workerScript = `
      addEventListener('message', ({ data }) => {
        const { age } = data;
        const premium = calculatePremium(age);
        postMessage(premium);
      });

      function calculatePremium(age) {
        return age * 1000/20 + 150;
      }
    `;

    const blob = new Blob([workerScript], { type: 'application/javascript' });
    this.premiumWorker = new Worker(URL.createObjectURL(blob));


    this.premiumWorker.onmessage = ({ data }) => {
      this.premium = data;
    };
  }

  ngOnInit(): void {
    this.calculatePremium();
  }

  calculatePremium(): void {
    this.premiumWorker.postMessage({ age: this.age });
  }

}
