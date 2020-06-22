import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "testing-form",
  templateUrl: "./testing-form.component.html",
  styleUrls: ["./testing-form.component.less"]
})

export class TestingFormComponent implements OnInit {

    public title: string = "User Name";

    constructor(private router: Router) {

    }

    


    ngOnInit(): void {

    }

}