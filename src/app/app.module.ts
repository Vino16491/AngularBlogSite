import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
// Angular material import
import { MaterialModule } from "./material.module";
import { routingComponents } from "./app-routing.module";
// import { LoginPageComponent } from './login-page/login-page.component';
import { ProfileComponent } from "./profile/profile.component";
// import { BlogsComponent } from './blogs/blogs.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";

/* Services Import */
//Authservice import
import { AuthService } from "./auth/auth.service";

/* Routing Module */
import { AppRoutingModule } from "./app-routing.module";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SignuppageComponent } from "./signuppage/signuppage.component";
import { AddStoryComponent } from "./add-story/add-story.component";

/* textEditor module */
import { QuillModule } from "ngx-quill";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { WelcomeComponent } from "./welcome/welcome.component";
import { SidenavComponent } from "./navbar/sidenav/sidenav.component";
@NgModule({
  declarations: [
    AppComponent,
    // BlogsComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    // LoginPageComponent
    routingComponents,
    PageNotFoundComponent,
    SignuppageComponent,
    AddStoryComponent,
    WelcomeComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    QuillModule,
    AngularEditorModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
