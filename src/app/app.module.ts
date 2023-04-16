import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnderMaintenanceComponent } from './under-maintenance/under-maintenance.component';
import { MenuComponent } from './menu/menu.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { FaqComponent } from './faq/faq.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { ServiceDescriptionComponent } from './service-description/service-description.component';

@NgModule({
  declarations: [
    AppComponent,
    UnderMaintenanceComponent,
    MenuComponent,
    PortfolioComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    PortfolioDetailComponent,
    FaqComponent,
    NotFoundComponent,
    ContactUsComponent,
    LoginComponent,
    ServiceDescriptionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
