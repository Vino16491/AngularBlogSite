import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginPageComponent } from "./auth/login-page/login-page.component";
import { BlogsComponent } from "./blogs/blogs.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SignuppageComponent } from "./auth/signuppage/signuppage.component";
import { AddStoryComponent } from "./blogs/add-story/add-story.component";
import { AuthGuard } from "./auth/auth.guard";
import { ReadBlogComponent } from "./blogs/read-blog/read-blog.component";

const routes: Routes = [
  { path: "", redirectTo: "/blogs", pathMatch: "full" },
  { path: "login", component: LoginPageComponent },
  { path: "blogs", component: BlogsComponent },
  { path: "signup", component: SignuppageComponent },
  { path: "story", component: AddStoryComponent },
  { path: "readblog", component: ReadBlogComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
export const routingComponents = [LoginPageComponent, BlogsComponent];
