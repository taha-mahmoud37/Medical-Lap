import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ShopComponent } from './shop/shop.component';
import { TeamComponent } from './team/team.component';
import { FAQComponent } from './faq/faq.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PipelineComponent } from './pipeline/pipeline.component';
import { GalleryCarouselComponent } from './gallery-carousel/gallery-carousel.component';
import { GalleryFullwidthComponent } from './gallery-fullwidth/gallery-fullwidth.component';
import { BlogComponent } from './blog/blog.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    DepartmentsComponent,
    ShopComponent,
    TeamComponent,
    FAQComponent,
    NotFoundComponent,
    PipelineComponent,
    GalleryCarouselComponent,
    GalleryFullwidthComponent,
    BlogComponent,
    ContactsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
