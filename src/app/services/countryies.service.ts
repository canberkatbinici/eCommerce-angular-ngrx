import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryiesService {

  constructor(  private http: HttpClient) { }


  getCountryes(username, password) {
    return this.http.get<User>(`http://localhost:8080/users/auth`, {responseType: 'json'})
      .pipe(map(user => {


        return user;
      }));
  }
}
