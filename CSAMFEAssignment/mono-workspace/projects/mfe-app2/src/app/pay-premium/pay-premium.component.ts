import { Component } from '@angular/core';

@Component({
  selector: 'app-pay-premium',
  templateUrl: './pay-premium.component.html',
  styleUrls: ['./pay-premium.component.scss']
})
export class PayPremiumComponent {
  age = localStorage.getItem("age") ? JSON.parse(localStorage.getItem("age") || '{}') : 30;
    ; // Example age
  premium: number = 0;
  premiumWorker: Worker;
  insuranceType = 'Life'

  constructor() {

    const workerScript = `
      addEventListener('message', ({ data }) => {
        const { age } = data;
        const premium = calculatePremium(age);
        postMessage(premium);
      });

      function calculatePremium(age) {
        // Your premium calculation logic goes here
        // Example: For simplicity, let's assume premium is age * 10
        return age * 1000/20 + 150;
      }
    `;

    const blob = new Blob([workerScript], { type: 'application/javascript' });
    this.premiumWorker = new Worker(URL.createObjectURL(blob));

    // Handle messages from the worker
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
