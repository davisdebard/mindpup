﻿// Angular.
import { UniversalModule } from 'angular2-universal';

// @angular.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { FormsModule, NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Headers } from '@angular/http';
import { RouterModule } from '@angular/router';

// App.
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
// Menu items.
import { HomeComponent } from './components/home/home.component';
import { IntroComponent } from './components/intro/intro.component';
import { ExploreComponent } from './components/explore/explore.component';
import { PlayComponent } from './components/play/play.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { TestingComponent } from './components/testing/testing.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
         // App.
         AppComponent
        ,NavMenuComponent
        // Menu items.
        ,HomeComponent
        ,IntroComponent
        ,ExploreComponent
        ,PlayComponent
        ,CreateComponent
        ,ContactComponent
        ,TestingComponent
    ],
    imports: [
        UniversalModule // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        ,FormsModule
        //,BrowserModule
        ,RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'intro', component: IntroComponent },
            { path: 'explore', component: ExploreComponent },
            { path: 'play', component: PlayComponent },
            { path: 'create', component: CreateComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'testing', component: TestingComponent },
            //{ path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}