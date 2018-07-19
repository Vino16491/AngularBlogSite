import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Angular material import
import { MatButtonModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card';
import { BlogsComponent } from './blogs/blogs.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProfileComponent } from './profile/profile.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar'
@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    ProfileComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule,
    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
