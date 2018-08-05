import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginPageComponent } from "./login-page/login-page.component";
import { BlogsComponent } from "./blogs/blogs.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SignuppageComponent } from "./signuppage/signuppage.component";
import { AddStoryComponent } from "./add-story/add-story.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "/blogs", pathMatch: "full" },
  { path: "login", component: LoginPageComponent },
  { path: "blogs", component: BlogsComponent },
  { path: "signup", component: SignuppageComponent },
  { path: "story", component: AddStoryComponent, canActivate:[AuthGuard] },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
export const routingComponents = [LoginPageComponent, BlogsComponent];
