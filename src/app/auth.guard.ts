import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = !!localStorage.getItem('isLoggedIn'); // Check if logged in
    if (isLoggedIn) {
      // If already logged in, redirect to p9
      this.router.navigate(['/homepage-full']);
      return false; // Prevent access to p2
    }
    return true; // Allow access to p2 if not logged in
  }
}
