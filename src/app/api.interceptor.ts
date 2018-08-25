import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {tap, catchError} from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(
    private router: Router
  ) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const baseUrl = 'http://192.168.137.144:3000/api';

    req = req.clone({
      url: baseUrl + req.url
    });

    return next.handle(req)
      .pipe(
        catchError(
          (err, caught) => {
            if (err instanceof HttpErrorResponse && err.status === 403) {
              this.router.navigate(['/']);
            } else {
              return Observable.throw(err);
            }
          }
        )
      );
  }
}
