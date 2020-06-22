import { Component, OnInit } from "@angular/core";
import { TestInfo } from "./testInfo";
import { Router } from "@angular/router";

@Component({
  selector: "tests-list",
  templateUrl: "./tests-list.component.html",
  styleUrls: ["./tests-list.component.less"]
})

export class TestsListComponent implements OnInit {

    public title: string = "User Name";

    public clientsTests: TestInfo[] = [
        {
            clientName: "Masha",
            url: "metamodel"
        },
        {
            clientName: "Dima",
            url: "lobach"
        }
    ]

    constructor( private router: Router) {}

    ngOnInit(): void {

    }

    public navigationTestForm(clientTest: TestInfo): void {

        this.router.navigate(
            ["user/testing-form"],
            {
                queryParams: {
                    "client-name":  clientTest.clientName,
                    "url": clientTest.url
                }
            });
    }

}