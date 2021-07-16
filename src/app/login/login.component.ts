import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../models/user';
import {LoginService} from '../services/login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../services/alert.service';
import {AccountService} from '../services/account.service';
import {first} from 'rxjs/operators';
import {removeDisabledFailures} from 'tslint';
import {request} from 'http';
import {MatDialogRef} from '@angular/material';
import {Store} from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import {AddProductToCart} from '../store/shop/shop.action';
import {AddUserToStore} from '../store/user/user.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  submitted = false;
  loginForm: FormGroup;
  user = {} as User;
  userdata;
  userdata2: User[];
  returnUrl: string;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any,
    private loginService: LoginService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private accountService: AccountService,
    public store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    console.log("hello mu world?")

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.loginForm.controls; }
  //
  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.accountService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          // console.log("data burada : " + data)
          this.onAddUserToStore(data)
          console.log("localStorage :" + localStorage.getItem('user'));
          // window.location.reload()
          this.onNoClick()
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
          console.log("ne varmış burda :" + JSON.stringify(error.error.text))
          console.log("sende mi brütüs :"  + JSON.stringify(error))
        });


  }


  onNoClick(): void {
    this.dialogRef.close();
  }



  onAddUserToStore(data): void {
    console.log("dataaaa")
    console.log(data)
    this.store.dispatch(new AddUserToStore(data));

  }
}
