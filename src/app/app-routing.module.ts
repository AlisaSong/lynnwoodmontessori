import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { WelcomeComponent } from './welcome/welcome.component';
// import { LoginComponent } from './components/login/login.component';
// import { UserChartComponent } from './components/userchart/userchart.component';
// import { SliceDetailsComponent } from './components/userchart/slice-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
