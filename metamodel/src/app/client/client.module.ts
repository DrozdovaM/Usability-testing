import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ClientToolComponent } from "./client-tool.component";
import { NewUsabilityTestComponent } from "./new-test/new-usability-test.component";
import { AppRoutingModule } from "../app-routing.module";
import { ClientTestingFormComponent } from "./new-test/form/client-testing-form.component";

@NgModule({
  declarations: [
    ClientToolComponent,
    NewUsabilityTestComponent,
    ClientTestingFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ClientToolComponent,
    NewUsabilityTestComponent,
    ClientTestingFormComponent
  ]
})
export class ClientModule {}