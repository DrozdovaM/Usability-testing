import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UserGuard implements CanActivate {

    public userType = "user";

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

        if (!localStorage.getItem("user")) {
            this.router.navigate(["/authentication"]);
        }

        return localStorage.getItem("user") && (this.userType === "user");
    }
}
