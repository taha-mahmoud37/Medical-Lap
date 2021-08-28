import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { DepartmentsComponent } from './departments/departments.component';
import { FAQComponent } from './faq/faq.component';
import { GalleryFullwidthComponent } from './gallery-fullwidth/gallery-fullwidth.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PipelineComponent } from './pipeline/pipeline.component';
import { ShopComponent } from './shop/shop.component';
import { TeamComponent } from './team/team.component';
import { GalleryCarouselComponent } from './gallery-carousel/gallery-carousel.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {path:"" , redirectTo:"home" , pathMatch:"full"},
  {path:"home" , component: HomeComponent},
  {path:"pipeline" , component: PipelineComponent},
  {path:"about" , component: AboutComponent},
  {path:"departments" , component: DepartmentsComponent},
  {path:"shop" , component: ShopComponent},
  {path:"team" , component: TeamComponent},
  {path:"faq" , component: FAQComponent},
  {path:"404" , component: NotFoundComponent},
  {path:"blog" , component: BlogComponent},
  {path:"carousel" , component: GalleryCarouselComponent},
  {path:"fullwidth" , component: GalleryFullwidthComponent},
  {path:"contact" , component:ContactsComponent},
  {path:"**" , component:NotFoundComponent},



  


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
