import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ApiService } from '../../api.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent implements OnInit {
  public signupFormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(8)]),
    phoneNumber: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required])
  }, {
    updateOn: 'change',
    validators: this.passwordMatchValidator
  });

  public loginFormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });


  @Input()
  public view: 'login' | 'signup';

  constructor(
    public dialogRef: MatDialogRef<AuthDialogComponent>,
    private apiService: ApiService,
    private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  public passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordConfirm').value
       ? null : { 'mismatch': true };
  }

  public login() {
    this.apiService.login(this.loginFormGroup.value.email, this.loginFormGroup.value.password)
      .subscribe(({ token }) => {
        this.authService.setLoggedIn(token);
      }, () => {
        console.log('err');
        this.loginFormGroup.setErrors({
          loginFailed: true
        });
      });
  }

  public signup() {
    const { name, email, password, phoneNumber } = this.loginFormGroup.value;
    this.apiService.signup(name, email, password, phoneNumber)
      .subscribe();
  }
}
