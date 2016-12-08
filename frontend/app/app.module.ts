import './rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
// Imports for loading & configuring the in-memory web api
import { AppComponent }         from './app.component';
import { BlogComponent }        from './blog.component';
import { AboutMeComponent }     from './about-me.component';
import { PostComponent }        from './post.component';
import { PostService }          from './post.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        BlogComponent,
        AboutMeComponent,
        PostComponent
    ],
    providers: [
        PostService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
