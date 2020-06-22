import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";
import { UserComponent } from "./user.component";
import { UserViewComponent } from "./view/user-view.component";
import { TestingFormComponent } from "./tests/testing-form.component";
import { TestsListComponent } from "./tests/tests-list.component";

@NgModule({
  declarations: [
    UserComponent,
    UserViewComponent,
    TestingFormComponent,
    TestsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    UserComponent,
    UserViewComponent,
    TestingFormComponent,
    TestsListComponent
  ]
})
export class UserModule {}