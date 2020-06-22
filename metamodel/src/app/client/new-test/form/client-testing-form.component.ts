import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";
import { Questions } from "./questions";

@Component({
  selector: "client-testing-form",
  templateUrl: "./client-testing-form.component.html",
  styleUrls: ["./client-testing-form.component.less"]
})

export class ClientTestingFormComponent implements OnInit {

	public firstQuestionsGroup: FormGroup;

	public clientCheckbox: string = "";

	public questions: Questions = {
		url: "",
		typeOfSite: "",
		search: "true",
		haveInfo: "",
		searchInfo: [],
		firstAdditionalQuestion: "",
		secondAdditionalQuestion: "",
		additionalTestTask: ""
	};

	public allCheckboxs: string[] = ["адрес", "телефон", "email", "соцсети"];

	public pageNumber: number = 1;


	constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    }

    ngOnInit(): void {
		
	}

	public fieldSelect(event): void {
		console.log(event.target.defaultValue);
		switch (event.target.name) {
			case "option":
				this.questions.typeOfSite = event.target.defaultValue;
				break;
			case "search":
				this.questions.search = event.target.defaultValue;
				break;
			case "haveInfo":
				this.questions.haveInfo = event.target.defaultValue;
				break;
		}
		if (event.target.name === "checkbox") {
			if (event.target.checked) {
				this.questions.searchInfo.push(event.target.defaultValue);
			} else {
				this.questions.searchInfo.forEach((value, i) => {
					if (value === event.target.defaultValue) {
						this.questions.searchInfo.splice(i , 1);
					}
				})
			}
		}
	}

	public addCheckbox() {
		if (!this.allCheckboxs.some(check => check === this.clientCheckbox)) {
			this.allCheckboxs.push(this.clientCheckbox);
		}
	}

	public continue(pageNumber: number): void {
		console.log(this.questions);
		this.pageNumber = pageNumber;
	}

	public submit(pageNumber): void {
		this.router.navigate(["client/result-tests"]);
		this.pageNumber = pageNumber;
	}


}
