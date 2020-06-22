import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "client-tool",
  templateUrl: "./client-tool.component.html",
  styleUrls: ["./client-tool.component.less"]
})

export class ClientToolComponent implements OnInit {

  public title = "";
  public test = "";

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
    if(localStorage.getItem("user")) {
      this.router.navigate(["/client/new-test"]);
      this.title = localStorage.getItem("user");
    } else {
      this.router.navigate(["/authentication"])
    }
}

}
