import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {

  public mobileQuery: MediaQueryList;

  public sideNavOpen: boolean;

  private mobileQueryListener: () => void;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private dialog: MatDialog,
    private authService: AuthService,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  openAuthDialog(view: 'login' | 'signup') {
    const dialogRef = this.dialog.open(AuthDialogComponent, {
      data: {
        view
      }
    });
    this.closeSideNav();
  }

  public closeSideNav() {
    this.sideNavOpen = false;
  }

  public isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
