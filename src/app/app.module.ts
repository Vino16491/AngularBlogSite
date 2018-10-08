import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
// Angular material import
import { MaterialModule } from "./material.module";
import { routingComponents } from "./app-routing.module";
import { LoginPageComponent } from "./auth/login-page/login-page.component";
import { ProfileComponent } from "./profile/profile.component";
import { BlogsComponent } from "./blogs/blogs.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";

/* Services Import */
//Authservice import
import { AuthService } from "./auth/auth.service";

/* Routing Module */
import { AppRoutingModule } from "./app-routing.module";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SignuppageComponent } from "./auth/signuppage/signuppage.component";
import { AddStoryComponent } from "./blogs/add-story/add-story.component";

/* textEditor module */
import { QuillModule } from "ngx-quill";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { WelcomeComponent } from "./welcome/welcome.component";
import { SidenavComponent } from "./navbar/sidenav/sidenav.component";

/* ngrx import */
import { StoreModule } from "@ngrx/store";
import { reducers } from "./app.reducer";

/* Firebase Integration */
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { environment } from "../environments/environment";
import { ReadBlogComponent } from "./blogs/read-blog/read-blog.component";
import { BlogDataService } from "./blogs/services/blog-data.service";

/* izitoast model */
import { Ng2IziToastModule } from "ng2-izitoast";
import { ToastrModule } from "ngx-toastr";
@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginPageComponent,
    routingComponents,
    PageNotFoundComponent,
    SignuppageComponent,
    AddStoryComponent,
    WelcomeComponent,
    SidenavComponent,
    ReadBlogComponent
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
    FlexLayoutModule,
    StoreModule.forRoot(reducers),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    Ng2IziToastModule,
    ToastrModule.forRoot({
      maxOpened: 3,
      preventDuplicates: true,
      autoDismiss: true,
      resetTimeoutOnDuplicate: true
    })
  ],
  providers: [AuthService, BlogDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
