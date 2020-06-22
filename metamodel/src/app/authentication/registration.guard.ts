import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class RegistrationGuard implements CanActivate {

    public clientType = "client";

    public userType = "user";

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        if (localStorage.getItem("user")) {
            if (this.clientType) {
                this.router.navigate(["/client/new-test"]);
            } else {
                this.router.navigate(["/user/test-list"]);
            }
        }

        return !localStorage.getItem("user");
    }
}
