import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isLoggedIn = this.authService.isLoggedIn();
    if (!isLoggedIn) {
      this.router.navigate(['/']);
    }
    return isLoggedIn;
  }
}
