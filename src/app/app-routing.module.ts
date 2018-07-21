import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
    {
        path: 'login', component: LoginPageComponent
    },
    {
        path: 'blogs', component: BlogsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginPageComponent, BlogsComponent]

