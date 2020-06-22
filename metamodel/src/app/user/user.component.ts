import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.less"]
})

export class UserComponent implements OnInit {

  public title: string = "";

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {

    if(localStorage.getItem("user")) {
      this.router.navigate(["/user/test-list"]);
      this.title = localStorage.getItem("user");
    } else {
      this.router.navigate(["/authentication"])
    }

  }

}