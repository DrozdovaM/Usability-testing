import { Component } from "@angular/core";
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})

export class AppComponent {

  public title = "Usability Test";

  public typeClient = "client";
  
  public typeUser = "user";
  
  constructor(public router: Router) {
    router.events.subscribe((e: RouterEvent) => {
      console.log(e.id, e.url);
      // if (e.url) {
      //   if (localStorage.getItem("user")) {
      //     if (this.typeClient) {
      //       if ((e.url === "/user") || (e.url === "/registration") || (e.url === "/authentication")) {
      //           this.router.navigate(["/client/new-test"]);
      //       }
      //     } else if ((e.url === "/client") || (e.url === "/registration") || (e.url === "/authentication")) {
      //       this.router.navigate(["/user/test-list"]);
      //     }
      //   } else {
      //     this.router.navigate(["/authentication"]);
      //   }
      // }
      
   });
  }

}
