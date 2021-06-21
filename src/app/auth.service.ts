import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuth() {
    return false;
  }

  getAccessToken() {
    return 'our_wornderful_token';
  }
}
