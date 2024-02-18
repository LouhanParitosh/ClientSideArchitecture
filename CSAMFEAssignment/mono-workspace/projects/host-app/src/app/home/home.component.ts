import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  insuranceID: number = 4456; // Example age




  saveId(): void {
    localStorage.setItem("insuranceID", this.insuranceID.toString());
    }
  
}
