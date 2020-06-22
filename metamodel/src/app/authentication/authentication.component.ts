import { Component, OnInit } from "@angular/core";
import { RegistrData } from "./registr-view";

@Component({
  selector: "authentication",
  templateUrl: "./authentication.component.html",
  styleUrls: ["./authentication.component.less"]
})

export class AuthenticationComponent implements OnInit {

    public authenticationData: RegistrData = {
        login: "",
        password: "",
    };

    ngOnInit(): void {

    }

}
