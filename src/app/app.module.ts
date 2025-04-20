import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ResultsComponent } from './components/results/results.component';
import { AdsComponent } from './components/ads/ads.component';
import { SectorsComponent } from './components/sectors/sectors.component';
import { VideosComponent } from './components/videos/videos.component';
import { SocialsComponent } from './components/socials/socials.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    FooterComponent,
    NavbarComponent,
    ContactComponent,
    AboutComponent,
    ServicesComponent,
    ResultsComponent,
    AdsComponent,
    SectorsComponent,
    VideosComponent,
    SocialsComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
