import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GvkHeaderComponent } from './gvk-header/gvk-header.component';
import { ReactiveFormsModule } from "@angular/forms";
import { GvkFooterComponent } from './gvk-footer/gvk-footer.component';
import { ProductsComponent } from './products/products.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TFitComponent } from './t-fit/t-fit.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ModalComponent } from './modal/modal.component';
import { MobileComponent } from './gvk-header/mobile/mobile.component';
import { DesktopComponent } from './gvk-header/desktop/desktop.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SwiperModule } from "swiper/angular";
import { CromptonComponent } from './crompton/crompton.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AnimatedDigitComponent } from './animated-digit/animated-digit.component';



@NgModule({
  declarations: [
    AppComponent,
    GvkHeaderComponent,
    GvkFooterComponent,
    ProductsComponent,
    HomepageComponent,
    TFitComponent,
    AboutComponent,
    ContactComponent,
    ModalComponent,
    MobileComponent,
    DesktopComponent,
    CarouselComponent,
    CromptonComponent,
    AnimatedDigitComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SwiperModule,
    MDBBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
