import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NewsComponent } from './components/news/news.component';
import { AboutComponent } from './components/about/about.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { NatureMediaComponent } from './components/nature-media/nature-media.component';
import { ProjectsMediaComponent } from './components/projects-media/projects-media.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NewsComponent,
    AboutComponent,
    SocialMediaComponent,
    NatureMediaComponent,
    ProjectsMediaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
