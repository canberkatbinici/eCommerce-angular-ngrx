import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user';
import {LoginService} from '../../services/login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../services/alert.service';
import {AccountService} from '../../services/account.service';
import {first} from 'rxjs/operators';
import {removeDisabledFailures} from 'tslint';
import {request} from 'http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loading = false;
  submitted = false;
  loginForm: FormGroup;
  user = {} as User;
  returnUrl: string;

  constructor(
    // public dialogRef: MatDialogRef<LoginComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any,
    private loginService: LoginService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private accountService: AccountService
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
          console.log("data burada : " + data)
          this.router.navigate(['/home'], { relativeTo: this.route });
        },
        error => {
          this.alertService.error(error);
          this.loading = false;

          console.log("ne varmış burda :" + JSON.stringify(error.error.text))
          console.log("sende mi brütüs :"  + JSON.stringify(error))
        });
          console.log("localStorage :" + localStorage.getItem('user'));


  }

  // login(){
  //   if (this.loginForm.valid){
  //     console.log(JSON.stringify(this.user))
  //     this.user.username = this.loginForm.value.username;
  //     this.loginService.loggedIn.next(this.user);
  //     this.router.navigate(['/home'], { relativeTo: this.route });
  //
  //   }else console.log("olmadı yar")
  // }



}
