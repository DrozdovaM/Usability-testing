import { Component, OnInit } from "@angular/core";
import { RegistrData } from "../registr-view";
import { Router } from '@angular/router';

@Component({
  selector: "registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.less"]
})

export class RegistrationComponent implements OnInit {

    public registerData: RegistrData = {
        login: "",
        name: "",
        password: "",
        type: "",
    };

    public checkPassword: string = "";

    constructor(private router: Router) {

    }

    ngOnInit(): void {

    }

    public checkRegisterType(event): void {
      this.registerData.type = event.target.defaultValue;
    }

    public checkPass() {
        if(this.checkPassword !== this.registerData.password) {

        }
    }

    public submit(): void {
      console.log("alo");
      localStorage.setItem("user", this.registerData.login);
      if (this.registerData.type === "client") {
        this.router.navigate(["/client"]);
      } else {
        this.router.navigate(["/user"]);
      }
    }

}
