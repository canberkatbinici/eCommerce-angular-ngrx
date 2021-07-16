import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, observable, Observable} from 'rxjs';
import {filter, first, map, observeOn, retry, skip, take, takeLast} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {User, UserInfo} from '../models/user';
import {isNull} from 'util';
import {select, Store} from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import {AddUserToStore} from '../store/user/user.action';
import {unwrapFirst} from 'codelyzer/util/function';

@Injectable({providedIn: 'root'})
export class AccountService {
  public userSubject: BehaviorSubject<UserInfo>;
  public user: Observable<UserInfo>;
  public currUser: User;

  constructor(
    private router: Router,
    private http: HttpClient,
    private store: Store<fromApp.AppState>,
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): UserInfo {
    return this.userSubject.value;
  }
  public get getUserData (){
    return this.userData()

  }

  public  userData(): User {
    console.log("userdata fonksiyonuuuu")
    if (this.isAuthanticated) {
      this.store.select('userState').pipe( filter(val => val !== null)).subscribe(user => {
          this.currUser = user.user;
          // console.log("userdata")
          // console.log(user.user)
        }
      );
      return this.currUser
      // }else return {firstName:"",gender:"",id:0,email:"",address:{addressLine:"",zipCode:"",country:"",surname:"",name:"",additional:"",phone:"",city:""},lastName:"",number:"",password:"",token:"",username:""};

    }else return null
    // }
  }

  public get isAuthanticated(): boolean {
    return !isNull(this.userSubject.value);
  }


  login(username, password) {
    // console.log(JSON.stringify(this.user))

    // @ts-ignore
    return this.http.post<User>(`http://localhost:8080/users/auth`, {username, password}, {responseType: 'json'})
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify({id: user[0].id, username: user[0].username, email: user[0].email}));
        console.log('local mı storeage');
        console.log(localStorage.getItem('user'));
        this.userSubject.next({id: user[0].id, username: user[0].username, email: user[0].email});
        console.log('bundan olavilir:' + JSON.stringify(this.userSubject.getValue()));
        return user;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/home']);
  }

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/users/auth`, user);

  }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  public getSecuritySettings(): Observable<User> {
    return this.http.get<User>(`/api/admin/securitySettings`);
  }

  // @ts-ignore
  getById(id: string): Observable<User> {
    // let a :User = new User();
    return this.http.get<User>('http://localhost:8080/user').pipe(map(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      console.log('bundan olavilir:' + JSON.stringify(this.userSubject.getValue()));
      return user;
    }));
    // return a
    // console.log(a)
  }


  reloadUser(token, id) {
    this.getById(id).subscribe(
      data => {
        console.log(data);
        this.store.dispatch(new AddUserToStore(data));
      }, error => console.log(error));


  }

  update(id, params) {
    return this.http.put(`${environment.apiUrl}/users/${id}`, params)
      .pipe(map(x => {
        // update stored user if the logged in user updated their own record
        if (id == this.userValue.id) {
          // update local storage
          const user = {...this.userValue, ...params};
          localStorage.setItem('user', JSON.stringify(user));

          // publish updated user to subscribers
          this.userSubject.next(user);
        }
        return x;
      }));
  }

  delete(id: string) {
    return this.http.delete(`${environment.apiUrl}/users/${id}`)
      .pipe(map(x => {
        // auto logout if the logged in user deleted their own record
        if (this.userValue.id.toString() == id.toString()) {
          this.logout();
        }
        return x;
      }));
  }


}
