import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// Angular material import
import { MatButtonModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import {MatSnackBar} from '@angular/material';
/* Components */
import { routingComponents } from './app-routing.module';
// import { LoginPageComponent } from './login-page/login-page.component';
import { ProfileComponent } from './profile/profile.component';
// import { BlogsComponent } from './blogs/blogs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

/* Services Import */
//Authservice import
import { AuthService } from './auth.service';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { AddStoryComponent } from './add-story/add-story.component';

/* textEditor module */
import { QuillModule } from 'ngx-quill';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { WelcomeComponent } from './welcome/welcome.component';
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
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatChipsModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    FormsModule,
    QuillModule,
    AngularEditorModule,
    ReactiveFormsModule
    // MatSnackBar

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
