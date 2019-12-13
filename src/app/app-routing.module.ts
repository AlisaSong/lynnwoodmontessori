import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdmissionsComponent } from './components/admissions/admissions.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { StaffComponent } from './components/staff/staff.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admissions', component: AdmissionsComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'curriculum', component: CurriculumComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
