import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { FeaturedComponent } from './featured/featured.component';
import { SocialComponent } from './social/social.component';
import { ChefsComponent } from './chefs/chefs.component';
import { ProductsComponent } from './products/products.component';
import { MenubarComponent } from './menubar/menubar.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    FeaturedComponent,
    SocialComponent,
    ChefsComponent,
    ProductsComponent,
    MenubarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
