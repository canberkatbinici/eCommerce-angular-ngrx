import {Component, Inject, OnInit, Type} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {LoginService} from '../../services/login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginComponent} from '../login.component';
import {first} from 'rxjs/operators';
import {AlertService} from '../../services/alert.service';
import {AccountService} from '../../services/account.service';
import {HomeComponent} from '../../home/home.component';



export function getRegisterComponent(): Type<Component> {
  if (localStorage.getItem('user') || localStorage.getItem('user') !== null) {

    return <Type<Component>>HomeComponent;
  }
  else{
    return <Type<Component>>RegisterComponent;
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  loading = false;
  submitted = false;
  registerForm: FormGroup;
  user = {} as User;
  constructor(
    // public dialogRef: MatDialogRef<LoginComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any,
    private loginService: LoginService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    public accountService: AccountService
  ) {}

  ngOnInit() {
    // console.log("hello mu world?")

    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.registerForm.controls; }
  //
  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    ;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.accountService.register(this.registerForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Registration successful', { keepAfterRouteChange: true });
          this.router.navigate(['../login'], { relativeTo: this.route });
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }


}
