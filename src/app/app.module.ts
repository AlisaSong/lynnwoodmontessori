import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { StaffComponent } from './components/staff/staff.component';
import { AdmissionsComponent } from './components/admissions/admissions.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CurriculumComponent } from './components/curriculum/curriculum.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StaffComponent,
    AdmissionsComponent,
    ProgramsComponent,
    FooterComponent,
    CurriculumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
