import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsComponent } from './products/products.component';
import { TFitComponent } from './t-fit/t-fit.component';
import { CromptonComponent } from './crompton/crompton.component';

const routes: Routes = [
  { path:'', component:HomepageComponent },
  { path:'products', component:ProductsComponent},
  { path:'t-fit', component:TFitComponent},
  { path:'about', component:AboutComponent},
  { path:'contact', component:ContactComponent},
  { path: 'crompton', component: CromptonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
