import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

  constructor(
    protected authService: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    // Get the auth token from the service.
    const authToken = this.authService.getAccessToken();

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = request.clone({
      headers: request.headers.set('Authorization', 'Barer ' +authToken)
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}
