import {Injectable} from '@angular/core';
import {HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {delay, mergeMap, materialize, dematerialize} from 'rxjs/operators';

import {adress, User} from '../models/user';

const users = [{
  id: 1,
  firstName: 'Test',
  lastName: 'User',
  email: 'canberkatbinici@gmail.com',
  username: 'ca',
  number: '123456789',
  password: '1234567',
  gender: 'male',
  token: 'token',
  address: [{
    name: "Adress 1",
    firstname: "canberk",
    surname: "atbinici",
    country: "Türkiye",
    city: "Antalya",
    addressLine: "3730 sokak no 9 daire 4",
    phone: "5435125437",
    zipCode: "07220",
    additional: "marketin yanı "
  },
    {
      name: "Adress 2",
      firstname: "canberk",
      surname: "atbinici",
      country: "Türkiye",
      city: "Antalya",
      addressLine: "3730 sokak no 9 daire 4",
      phone: "5435125437",
      zipCode: "07220",
      additional: "marketin yanı "
    }]
}];

@Injectable({
  providedIn: 'root'
})
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const {url, method, headers, body} = request;

    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith('/users/authenticate') && method === 'POST':
          return authenticate();
        case url.endsWith('/users') && method === 'GET':
          return getUsers();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions

    function authenticate() {
      const {username, password} = body;
      const user = users.find(x => x.username === username && x.password === password);
      if (!user) {
        return error('Username or password is incorrect');
      }
      return ok([{
        id: 1,
        firstName: 'Test',
        lastName: 'User',
        email: 'canberkatbinici@gmail.com',
        username: 'ca',
        number: '123456789',
        password: '1234567',
        gender: 'male',
        token: 'token',
        address: [{
          name: "Adress 1",
          firstname: "canberk",
          surname: "atbinici",
          country: "Türkiye",
          city: "Antalya",
          addressLine: "3730 sokak no 9 daire 4",
          phone: "5435125437",
          zipCode: "07220",
          additional: "marketin yanı "
        },
          {
            name: "Adress 2",
            firstname: "canberk",
            surname: "atbinici",
            country: "Türkiye",
            city: "Antalya",
            addressLine: "3730 sokak no 9 daire 4",
            phone: "5435125437",
            zipCode: "07220",
            additional: "marketin yanı "
          }]
      }]);
    }

    function getUsers() {
      if (!isLoggedIn()) {
        return unauthorized();
      }
      return ok(users);
    }

    // helper functions

    function ok(body?) {
      return of(new HttpResponse({status: 200, body}));
    }

    function error(message) {
      return throwError({error: {message}});
    }

    function unauthorized() {
      return throwError({status: 401, error: {message: 'Unauthorised'}});
    }

    function isLoggedIn() {
      return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }
  }
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
