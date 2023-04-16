import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component'
import { HomeComponent } from './home/home.component'
import {NotFoundComponent} from "./not-found/not-found.component";
import {FaqComponent} from "./faq/faq.component";
import {PortfolioDetailComponent} from "./portfolio-detail/portfolio-detail.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {LoginComponent} from "./login/login.component";
import {ServiceDescriptionComponent} from "./service-description/service-description.component";

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"portfolio", component: PortfolioComponent, children: [
      {path: "first", component: PortfolioDetailComponent}
    ]},
  {path: 'service', component: ServiceDescriptionComponent, children:[
      {
        path: ':service_t',
        component: ServiceDescriptionComponent
      }
    ]
  },
  {path: "faq", component: FaqComponent},
  {path: "contact-us", component: ContactUsComponent},
  {path: "about-us", component: AboutUsComponent},
  {path: "login", component: LoginComponent},
  {path: "", component: HomeComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
