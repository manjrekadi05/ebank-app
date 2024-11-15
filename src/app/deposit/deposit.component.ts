import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.css'
})
export class DepositComponent {
  constructor(private router: Router) {}

  onLogout() {
    // Logic for logging out
    this.router.navigate(['/login']);
  } 
  

}
