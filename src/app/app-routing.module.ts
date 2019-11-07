import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdmissionsComponent } from './components/admissions/admissions.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { StaffComponent } from './components/staff/staff.component';
import { TourComponent } from './components/tour/tour.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admissions', component: AdmissionsComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'tour', component: TourComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
