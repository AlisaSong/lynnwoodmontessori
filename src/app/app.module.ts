import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { StaffComponent } from './components/staff/staff.component';
import { TourComponent } from './components/tour/tour.component';
import { AdmissionsComponent } from './components/admissions/admissions.component';
import { ProgramsComponent } from './components/programs/programs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StaffComponent,
    TourComponent,
    AdmissionsComponent,
    ProgramsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
