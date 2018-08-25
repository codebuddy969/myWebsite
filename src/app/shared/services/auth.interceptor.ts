import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for(var i = 0; i <ca.length; i++) {
              var c = ca[i];
              while (c.charAt(0) == ' ') {
                c = c.substring(1);
              }
              if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
              }
            }
            return "";
          }

        const idToken = getCookie("XSRF-TOKEN");

        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set("X-CSRF-TOKEN", idToken)
            });
            // console.log(idToken);
            // console.log(document.cookie);
            return next.handle(cloned);
        }
        else {
            // console.log("return" + 0);
            // console.log("return", document.cookie);
            return next.handle(req);
        }
    }
    
}