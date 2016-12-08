import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent }        from './blog.component';
import { AboutMeComponent }     from './about-me.component';
import { PostComponent }        from './post.component';


const routes: Routes = [
    { path: '', redirectTo: '/blog', pathMatch: 'full' },
    { path: 'blog', component: BlogComponent },
    { path: 'about_me', component: AboutMeComponent },
    { path: 'blog/post', component: PostComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
