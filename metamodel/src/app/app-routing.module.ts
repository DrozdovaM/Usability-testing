import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewUsabilityTestComponent } from "./client/new-test/new-usability-test.component";
import { ClientViewComponent } from "./client/view/client-view.component";
import { ResultTestComponent } from "./client/result-test/result-test.component";
import { UserComponent } from "./user/user.component";
import { ClientToolComponent } from "./client/client-tool.component";
import { ClientTestingFormComponent } from "./client/new-test/form/client-testing-form.component";
import { TestingFormComponent } from "./user/tests/testing-form.component";
import { TestsListComponent } from "./user/tests/tests-list.component";
import { UserViewComponent } from "./user/view/user-view.component";
import { RegistrationComponent } from "./authentication/registration/registration.component";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { RegistrationGuard } from './authentication/registration.guard';

const clientRoute: Routes = [
  {
    path: "new-test", component: NewUsabilityTestComponent, children: [{ path: "form", component: ClientTestingFormComponent}]
  },
  {
    path: "view", component: ClientViewComponent
  },
  {
    path: "result-tests", component: ResultTestComponent
  }
];

const userRoute: Routes = [
  { path: "test-list", component: TestsListComponent },
  { path: "view", component: UserViewComponent},
  { path: "testing-form", component: TestingFormComponent}
 
];

const clientOrUser: Routes = [
    { path: "", pathMatch: "full", redirectTo: "/authentication"},
    { path: "registration", component: RegistrationComponent, canActivate: [RegistrationGuard]},
    { path: "authentication", component: AuthenticationComponent, canActivate: [RegistrationGuard]},
    {
      path: "client", component: ClientToolComponent, children: clientRoute
    },
    {
      path: "user", component: UserComponent, children: userRoute
    }
];

@NgModule({
  imports: [RouterModule.forRoot(clientOrUser)],
  exports: [RouterModule],
  providers: [RegistrationGuard]
})
export class AppRoutingModule { }
