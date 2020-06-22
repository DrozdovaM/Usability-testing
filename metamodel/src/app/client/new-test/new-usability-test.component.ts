import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: "new-usability-test",
  templateUrl: "./new-usability-test.component.html",
  styleUrls: ["./new-usability-test.component.less"]
})

export class NewUsabilityTestComponent implements OnInit {

    public startTestingTittle = "Начать тестирование";

    public startButtonVisible = true;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    }

    ngOnInit(): void {

    }

    public checkUrl() {
      if (this.router.url === "/client/new-test/form") {
        return false;
      } else {
        return true;
      }
    }

}
