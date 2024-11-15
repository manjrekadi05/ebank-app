import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  isDashboard: boolean = false;
  isLoginPage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Listen for navigation events to update isLoginPage on route change
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkCurrentRoute(event.urlAfterRedirects);
      }
    });
  }

  ngAfterViewInit() {
    // Ensure correct initial setting of isLoginPage
    this.checkCurrentRoute(this.router.url);
  }

  checkCurrentRoute(url: string) {
    // Update isDashboard and isLoginPage based on the route
    this.isDashboard = url === '/dashboard';
    this.isLoginPage = url === '/login';
  }

  onLogout() {
    // Navigate to login page on logout
    this.router.navigate(['/login']);
  }
}
