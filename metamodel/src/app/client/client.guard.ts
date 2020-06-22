// Нужно ли делать так!?

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class ClientGuard implements CanActivate {

    public clientType = "client";

    public userType = "user";

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        if (!localStorage.getItem("user")) {
            this.router.navigate(["/authentication"]);
        }

        return localStorage.get("user") && this.clientType === "client";
    }
}
