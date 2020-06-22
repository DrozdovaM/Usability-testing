import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ClientModule } from "./client/client.module";
import { UserModule } from "./user/user.module";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { RegistrationComponent } from "./authentication/registration/registration.component";

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ClientModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
