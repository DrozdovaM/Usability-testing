import { Component, OnInit } from "@angular/core";

@Component({
  selector: "user-view",
  templateUrl: "./user-view.component.html",
  styleUrls: ["./user-view.component.less"]
})

export class UserViewComponent implements OnInit {

    public title: string = "User Name";

    ngOnInit(): void {

    }

}